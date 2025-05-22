// routes/xssScan.route.js
import express from 'express';
import { checkXssVulnerability } from '../scanner/checkXss.js';

const router = express.Router();

router.post('/scan-xss', async (req, res) => {
  const { url } = req.body;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL is required in request body.' });
  }

  try {
    const result = await checkXssVulnerability(url);

    return res.json({
      originalUrl: url,
      testUrl: result.testUrl,
      xssDetected: result.xssDetected,
      message: result.xssDetected
        ? '🚨 XSS vulnerability detected!'
        : '✅ No XSS found.',
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
