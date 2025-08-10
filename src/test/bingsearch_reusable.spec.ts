import test, { Page } from "@playwright/test"
import { getTextFromElement, submitOnElement, typeOnElement } from "../main/Reusable_Methods"

let page: Page
test.beforeAll(async ({browser}) => {
   //initial the browser steup
   page = await browser.newPage()
})

test('navigate to Bing and search for a keyword', async() => {
  //navigate to bing web site
  await page.goto("https://www.bing.com")

  await page.waitForTimeout(3000) //wait for 3 seconds

  // type bmw in the search box
  await typeOnElement(page, "//*[@name='q']", "Car","Search Box")

  // hit submit on search box
  await submitOnElement(page,"Search Box")

  // wait few seconds for the results to load
  await page.waitForTimeout(3000)
})//end of test 1

test('capture the results', async() => {
    //capture the results
    let results = await getTextFromElement(page, "//*[@class='sb_count']", "Results Element")
    // print the results
    let arrayResults = results.split(' ')
    console.log("Total results count is " + arrayResults[1])
})//end of test 2

