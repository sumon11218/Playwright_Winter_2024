import { test, expect, Page } from '@playwright/test';

//declare global page variable
let page: Page
test.beforeAll(async ({ browser }) => {
   page = await browser.newPage()
})//end of beforeAll

test('Search for soccer on bing @smoke', async () => {
    await page.goto("https://www.bing.com")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//*[@name='q']").fill("soccer")
    //we need to use keyboard command to press enter on a search field
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)
})

test('Capture search number for soccer', async () => {
    let result = await page.locator("xpath=//*[@class='sb_count']").textContent()
    let arrayResult = result.toString().split(" ")
    console.log("Search number for soccer: " + arrayResult[1])
})


