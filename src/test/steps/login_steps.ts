import { Given, Then, When } from "@cucumber/cucumber";
import {chromium, Page, Browser} from "@playwright/test";

let browser: Browser;
let page: Page;

Given('I am on Home page', async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto("https://ww1.lifeplus.com/uk/en/");
  });

  When('User click on Sign in and enter valid email {string}', async function (email) {
    await page.locator(".sign-in").click();

    await page.locator("//*[@id='site-login-dialog']//form/input[1]").fill(email);
    //await page.locator("input[placeholder='Email Address']").fill(email);
    
  });

  When('Click continue', async function () {
    
    await page.locator("//*[@id='site-login-dialog']//form/a[2]").click();
  });

  When('User enter valid Password {string}', async function (password) {
    await page.locator("//*[@id='site-login-dialog']//form/input[2]").fill(password);
  });

  When('User click on sign in button', async function () {
    await page.locator("//*[@id='site-login-dialog']//form/a[3]").click()
  });

  Then('User should be taken to Account details page', async function () {
    await page.locator("//*[@id='header-toolbar']/div[2]/div[1]/div[1]/a").click();
  });
