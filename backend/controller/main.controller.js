async function checkSecurityHeaders(url) {
    const expectedHeaders = [
        'content-security-policy',
        'x-frame-options',
        'x-content-type-options',
        'strict-transport-security',
        'referrer-policy',
        'permissions-policy',
        'x-xss-protection'
    ];
    const missingHeaders = [];

    return new Promise((resolve) => {
        const protocol = url.protocol === 'https:' ? https : require('http');
        const request = protocol.request({
            hostname: url.hostname,
            port: url.port || (url.protocol === 'https:' ? 443 : 80),
            path: url.pathname || '/',
            method: 'HEAD' 
        }, (response) => {
            const headers = response.headers;
            expectedHeaders.forEach(header => {
                if (!headers[header]) {
                    missingHeaders.push(header);
                }
            });

            resolve({
                missing: missingHeaders.length > 0,
                details: missingHeaders.length > 0 ?
                    `Missing headers: ${missingHeaders.join(', ')}` :
                    'All critical security headers appear to be present.'
            });
        });

        request.on('error', (e) => {
            console.error(`Error checking headers for ${url.href}:`, e);
            resolve({ missing: true, details: `Failed to retrieve headers: ${e.message}` });
        });

        request.end();
    });
}

async function checkSslCertificate(url) {
    return new Promise((resolve) => {
        if (url.protocol !== 'https:') {
            return resolve({ hasIssues: false, details: 'SSL checks are only applicable to HTTPS URLs.' });
        }
        const request = https.request({
            hostname: url.hostname,
            port: url.port || 443,
            path: url.pathname || '/',
            method: 'HEAD',
        }, (response) => {
            const cert = response.socket.getPeerCertificate(true);

            if (!cert || Object.keys(cert).length === 0) {
                return resolve({ hasIssues: true, details: 'No SSL certificate found or it is invalid.' });
            }
            if (response.socket.authorized === false) {
                return resolve({ hasIssues: true, details: `SSL Certificate Authorization Failed: ${response.socket.authorizationError}` });
            }

            const expiryDate = new Date(cert.valid_to);
            if (expiryDate < new Date()) {
                return resolve({ hasIssues: true, details: `SSL Certificate Expired on: ${expiryDate.toLocaleDateString()}` });
            }

            resolve({ hasIssues: false, details: `SSL Certificate is valid and expires on ${expiryDate.toLocaleDateString()}.` });
        });

        request.on('error', (e) => {
           if (e.code === 'ERR_TLS_CERT_ALTNAME_INVALID' || e.code === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE') {
               return resolve({ hasIssues: true, details: `SSL/TLS handshake error: ${e.message}` });
           }
            console.error(`Error checking SSL for ${url.href}:`, e);
            resolve({ hasIssues: true, details: `Failed to connect for SSL check: ${e.message}` });
        });

        request.end();
    });
}


const  checkVul = async (req, res) => {
    const { targetUrl } = req.body;

    if (!targetUrl) {
        return res.status(400).json({ error: 'Target URL is required.' });
    }

    let url;
    try {
        url = new URL(targetUrl);
        if (!['http:', 'https:'].includes(url.protocol)) {
            return res.status(400).json({ error: 'Only HTTP and HTTPS URLs are supported.' });
        }
    } catch (e) {
        return res.status(400).json({ error: 'Invalid URL provided.' });
    }

    let vulnerabilitiesFound = {
        xss: false,
        sqlInjection: false,
        openRedirects: false,
        securityHeadersMissing: false,
        directoryListingEnabled: false,
        sslCertificateIssues: false,
    };

    let scanDetails = [];

    try {
        // 1. Check Security Headers
        const headerCheckResult = await checkSecurityHeaders(url);
        vulnerabilitiesFound.securityHeadersMissing = headerCheckResult.missing;
        scanDetails.push({ type: 'Security Headers', details: headerCheckResult.details });

        // 2. Check SSL Certificate Issues (for HTTPS)
        const sslCheckResult = await checkSslCertificate(url);
        vulnerabilitiesFound.sslCertificateIssues = sslCheckResult.hasIssues;
        scanDetails.push({ type: 'SSL Certificate', details: sslCheckResult.details });

        res.json({
            targetUrl: targetUrl,
            status: 'Completed',
            timestamp: new Date().toISOString(),
            vulnerabilities: vulnerabilitiesFound,
            scanDetails: scanDetails,
        });
    } catch (error) {
        console.error('Scan error:', error);
        res.status(500).json({ error: 'An error occurred during the scan.', details: error.message });
    }
}

export default checkVul;