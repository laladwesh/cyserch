import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
// import ScanResults from './ScanResults'; // We'll handle navigation instead of direct rendering here

function VulnerabilityScanner() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (event) => {
    setWebsiteUrl(event.target.value);
  };

  const handleRunScan = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/scan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ targetUrl: websiteUrl }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const scanData = await response.json();
      // Navigate to the ScanResults page and pass the data as state
      navigate("/scan-results", { state: scanData });
    } catch (err) {
      setError("Failed to run scan. Please try again.");
      console.error("Scan Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-xl">
        <div>
          <div className="flex justify-center items-center h-12 w-12 rounded-md bg-blue-600 text-white">
            {/* Replace with your actual logo or icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 22V12m0 0l-3-3m3 3l3-3"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Scan your website for vulnerabilities
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="website" className="sr-only">
              Website URL
            </label>
            <input
              id="website"
              name="website"
              type="url"
              autoComplete="url"
              required
              className="appearance-none block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="www.example.com"
              value={websiteUrl}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <button
              type="button"
              className={`w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              }`}
              onClick={handleRunScan}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Run Scan"
              )}
            </button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="w-full flex justify-center py-3 px-5 border border-blue-600 rounded-md shadow-sm text-base font-medium text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => navigate("/full-scan")} // Navigate to the EmailForm
            >
              Full Scan
            </button>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500">
          <p>
            By clicking "Run Scan", you agree to our{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {error && (
          <div className="mt-6 text-center text-red-500 font-semibold">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

// Create a separate ScanResults component (if you haven't already)
function ScanResults() {
  const location = useLocation();
  const scanData = location.state;
  const navigate = useNavigate();

  if (!scanData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Scan Results Unavailable
          </h2>
          <p className="text-gray-600">
            It seems the scan data is missing. Please run a scan first.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Go to Scanner
          </button>
        </div>
      </div>
    );
  }

  const hasVulnerabilities = Object.values(
    scanData?.vulnerabilities || {}
  ).some((value) => value === true);

  const vulnerabilityList = Object.entries(scanData?.vulnerabilities || {})
    .filter(([, value]) => value === true)
    .map(([key]) => {
      switch (key) {
        case 'xss':
          return { name: 'Cross-Site Scripting', severity: 'high' };
        case 'sqlInjection':
          return { name: 'SQL Injection', severity: 'critical' };
        case 'openRedirects':
          return { name: 'Open Redirects', severity: 'medium' };
        case 'securityHeadersMissing':
          return { name: 'Missing Security Headers', severity: 'low' };
        case 'directoryListingEnabled':
          return { name: 'Directory Listing Enabled', severity: 'low' };
        case 'sslCertificateIssues':
          return { name: 'SSL Certificate Issues', severity: 'medium' };
        default:
          return { name: key, severity: 'unknown' };
      }
    });

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-600 text-white';
      case 'high':
        return 'bg-orange-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-gray-800';
      case 'low':
        return 'bg-blue-300 text-gray-800';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
            Scan Results for <span className="text-blue-600">{scanData.targetUrl}</span>
          </h2>
        </div>

        {/* Status */}
        <div className="text-center">
          {hasVulnerabilities ? (
            <div className="inline-flex items-center bg-red-100 text-red-700 rounded-full px-4 py-2 font-semibold">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Found {vulnerabilityList.length} Vulnerabilities
            </div>
          ) : (
            <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-4 py-2 font-semibold">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              No Vulnerabilities Found!
            </div>
          )}
        </div>

        {/* Vulnerability List */}
        {hasVulnerabilities && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Detected Vulnerabilities:
            </h3>
            <ul className="space-y-2">
              {vulnerabilityList.map((vuln) => (
                <li
                  key={vuln.name}
                  className="bg-gray-50 rounded-md p-3 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-3 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span className="font-medium text-gray-800">{vuln.name}</span>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(
                      vuln.severity
                    )}`}
                  >
                    {vuln.severity.toUpperCase()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Scan Details */}
        {scanData?.scanDetails && scanData.scanDetails.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Scan Details:</h3>
            <ul className="space-y-2">
              {scanData.scanDetails.map((detail) => (
                <li key={detail.type} className="bg-gray-50 rounded-md p-3">
                  <strong className="font-semibold text-gray-800">{detail.type}:</strong>{' '}
                  <p className="text-gray-700">{detail.details}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            className="inline-flex items-center px-5 py-3 border border-blue-500 rounded-md shadow-sm text-sm font-medium text-blue-500 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:text-white"
            onClick={() => navigate('/full-scan')}
          >
            Full Scan
          </button>
          <button
            className="inline-flex items-center px-5 py-3 border border-red-500 rounded-md shadow-sm text-sm font-medium text-red-500 bg-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:text-white"
            onClick={() => {
              // Implement your download report logic here
              alert('Download Report Clicked (Implement Functionality)');
            }}
          >
            Download Report
          </button>
          <button
            className="inline-flex items-center px-5 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => navigate('/')}
          >
            Scan Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default VulnerabilityScanner;
export { ScanResults };
