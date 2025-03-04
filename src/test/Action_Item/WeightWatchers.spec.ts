import { test, expect, Page } from '@playwright/test';

//declare global page variable
let page: Page
test.beforeAll(async ({ browser }) => {
   page = await browser.newPage()
})//end of beforeAll

//store the zipcode arrays
let zipCode = Array<string>()
zipCode.push("11218")
zipCode.push("10001")

test('Search for a in-person weight loss studio by zipcode', async () => {
    for(let i =0; i<zipCode.length; i++){
        await page.goto("https://www.weightwatchers.com")
        await page.locator("xpath=//*[@data-e2e-name='find_a workshop']").click()
        await page.locator("xpath=//*[text()='In-Person']").click()
        await page.waitForTimeout(2500)
        await page.locator("xpath=//*[@id='location-search']").fill(zipCode[i])
        await page.locator("xpath=//*[@id='location-search-cta']").click()
        await page.waitForTimeout(1000)
        await page.locator("xpath=//*[contains(@class,'linkContainer')]").nth(0).click()
        let studioName = await page.locator("xpath=//*[contains(@class,'locationName-')]").textContent()
        console.log("Studio Name: " + studioName)
        let studioAddress = await page.locator("xpath=//*[contains(@class,'address-')]").textContent()
        console.log("Studio Address: " + studioAddress)
        await page.waitForTimeout(2500)
        await page.locator("xpath=//*[contains(text(),'Upcoming In-Person Workshop')]").nth(0).scrollIntoViewIfNeeded()
        let scheduleContainer = await page.locator("xpath=//*[contains(@class,'scheduleContainerMobile-')]").textContent()
        console.log("Schedules: " + scheduleContainer)
        await page.waitForTimeout(1500)
    }//end of loop
})


