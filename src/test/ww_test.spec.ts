import {Page, test} from '@playwright/test'

let page: Page
test.beforeAll(async ({browser}) => {
   //initial the browser steup
   page = await browser.newPage()
})

test('Search for a sudio by a zipcode and capture the hours', async() => {
    await page.goto("https://www.weightwatchers.com/us/")
    await page.locator("xpath=//*[text()='Find a Workshop']").nth(0).click()
    await page.locator("xpath=//*[@id='location-search']").fill("11230")
    await page.locator("xpath=//*[@class='rightArrow-C_sUu']").click()

    await page.waitForTimeout(3000) // wait for the results to load
    await page.mouse.wheel(0,300)
    await page.locator("xpath=//*[@class='heading-oK8Ox']").nth(0).click()
    let results = await page.locator("xpath=//*[@class='address-FnT8k']").textContent()

    await page.waitForTimeout(2000) // wait for the schedule to load
    await page.mouse.wheel(0,400)
    let schedule = await page.locator("xpath=//*[@class='scheduleContainerMobile-ps6Rm']").textContent()
    console.log("address: " + results + " & studio hours: " + schedule)
    await page.waitForTimeout(6000) // wait for the schedule to load

})