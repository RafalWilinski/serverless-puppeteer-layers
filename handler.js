'use strict';
const puppeteer = require('puppeteer');

module.exports.index = async (event, context) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: '/opt/headless_shell',
      args: ['--no-sandbox', '--disable-gpu', '--single-process'],
    });

    const page = await browser.newPage();
    await page.goto(event['queryStringParameters'].address, {
      waitUntil: ['domcontentloaded', 'networkidle0'],
    });

    const image = await page.screenshot({
      clip: { x: 0, y: 0, width: 1024, height: 800 },
      encoding: 'base64'
    });

    browser.close();

    return {
      statusCode: 200,
      body: image,
      headers: {
        'Content-Type': 'image/png',
      },
      isBase64Encoded: true
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500
    };
  }
};
