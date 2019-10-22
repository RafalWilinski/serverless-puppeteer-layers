'use strict';
const chromium = require('chrome-aws-lambda');
const puppeteer = chromium.puppeteer;

module.exports.index = async (event, context) => {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      defaultViewport:{width:1024,height:800},
      headless: true,
      executablePath: await chromium.executablePath,
      args: chromium.args,
    });

    const page = await browser.newPage();
    await page.goto(event['queryStringParameters'].address, {
      waitUntil: ['domcontentloaded', 'networkidle0'],
    });

    const image = await page.screenshot({
      clip: { x: 0, y: 0, width: 1024, height: 800 },
      encoding: 'base64'
    });

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
  finally{
    if(browser)
      await browser.close();
  }
};
