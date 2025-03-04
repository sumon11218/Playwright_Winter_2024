import { test, expect, Page } from '@playwright/test'
import { GoogleHome } from '../../main/Google_POM/GoogleHome'
import { GoogleSearchResults } from '../../main/Google_POM/GoogleSearchResults'


//declare global page variable
let page: Page
let googleHome
let googleSearchResults

test.beforeAll(async ({ browser }) => {
   page = await browser.newPage()
   googleHome = new GoogleHome(page)
   googleSearchResults = new GoogleSearchResults(page)
})//end of beforeAll

test('Search for soccer on google', async () => {

    await page.goto("https://www.google.com")
    //search for soccer
    await googleHome.search("soccer")
    //click on the search button
    await googleHome.clickOnSearchButton()
    //capture and print out the search number for soccer
    await googleSearchResults.getSearchResults()

})