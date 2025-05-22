import axios from 'axios';
import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';

export async function checkXssVulnerability(url) {
  const payload = `<script>document.title='XSS-DETECTED'</script>`;
  const testUrl = injectPayload(url, payload) || url; // fallback to original for DOM checks

  console.log('[XSS SCAN] Testing:', testUrl);

  try {
    // Try static HTML scan
    const staticResult = await scanStaticHTML(testUrl, payload);
    if (staticResult.xssDetected) return staticResult;

    // Try DOM-based scan with puppeteer
    const domResult = await scanDOMWithPuppeteer(testUrl);
    return domResult;

  } catch (err) {
    console.error('[XSS SCAN ERROR]', err.message);
    return {
      xssDetected: false,
      testUrl,
      error: 'Could not complete scan.',
    };
  }
}

function injectPayload(url, payload) {
  try {
    const u = new URL(url);
    const params = [...u.searchParams.keys()];
    if (params.length === 0) return null;

    u.searchParams.set(params[0], payload);
    return u.toString();
  } catch {
    return null;
  }
}

async function scanStaticHTML(url, payload) {
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (XSSScanner)'
      },
      timeout: 10000,
    });

    const $ = cheerio.load(html);
    const bodyText = $('body').html() || '';
    const xssDetected = bodyText.includes(payload);

    return {
      xssDetected,
      testUrl: url,
      method: 'Static HTML Scan'
    };
  } catch (err) {
    throw new Error('Static scan failed: ' + err.message);
  }
}


async function scanDOMWithPuppeteer(url) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-extensions',
        '--disable-blink-features=AutomationControlled',
        '--disable-default-apps',
        '--disable-popup-blocking',
        '--disable-features=IsolateOrigins,site-per-process',
        '--start-maximized'
      ]
    });

    const page = await browser.newPage();

    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
    );

    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 20000
    });

    const title = await page.title();
    const xssDetected = title.includes('XSS-DETECTED');

    return {
      xssDetected,
      testUrl: url,
      method: 'DOM Scan with Puppeteer'
    };
  } catch (err) {
    console.error('[XSS SCAN ERROR]', err.message);
    throw new Error('Puppeteer scan failed: ' + err.message);
  } finally {
    if (browser) await browser.close();
  }
}
