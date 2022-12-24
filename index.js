const playwright = require('playwright-aws-lambda');

exports.handler = async (event, context) => {
  console.log("Starting process..");

  const pageToScrape = "https://www.google.com";

  const browser = await playwright.launchChromium();
  const browserContext = await browser.newContext();

  const page = await browserContext.newPage();
  await page.goto(pageToScrape);
  //const result = await page.content();
  const title = await page.title();
  console.log("Title: " + title);
  
  await browser.close();
  const response = {
    title
  };
  return response;
};