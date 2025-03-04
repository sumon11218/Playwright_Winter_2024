import { test, expect, Page } from '@playwright/test';

//declare global page variable
let page: Page
test.beforeAll(async ({ browser }) => {
   page = await browser.newPage()
})//end of beforeAll

test('Shop for men new arrival at Express', async () => {
        await page.goto("https://www.express.com")
        await page.locator("xpath=//*[text()='ACCEPT ALL']").click()
        //await page.locator("xpath=//button[@id='closeIconContainer']").click({force: true})
        await page.locator("xpath=//a[text()='MEN']").nth(0).hover()
        await page.locator("xpath=//*[text()='New Arrivals']").nth(1).click()
        await page.locator("xpath=//*[@role='option']").nth(0).click()
        await page.locator("xpath=//*[@aria-label='Deep Red']").click()
        await page.locator("xpath=//*[@aria-label='Select xl']").click()
        await page.locator("xpath=//*[@unbxdattr='AddToCart']").click()
        await page.waitForTimeout(5000)
   
})


