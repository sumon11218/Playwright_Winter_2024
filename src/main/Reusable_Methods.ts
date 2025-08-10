import { Page } from "@playwright/test"


// create a method to click on any element
export async function clickOnElement(page:Page, xpath:string, elementName:string){
    console.log("Clicking on " + elementName)
    await page.locator("xpath="+xpath).click()
}

// create a method to click on any element by index
export async function clickOnElementByIndex(page: Page, xpath: string, index: number, elementName: string) {
    console.log("Clicking on " + elementName + " at index " + index);
    await page.locator("xpath=" + xpath).nth(index).click()
}

// create a method to submit/enter on a input field
export async function submitOnElement(page: Page,elementName: string) {
    console.log("Submitting on " + elementName);
    await page.keyboard.press('Enter')
}

// create a method to type a text on a input field
export async function typeOnElement(page: Page, xpath: string, text: string, elementName: string) {
    console.log("Typing on " + elementName);
    await page.locator("xpath=" + xpath).fill(text)
}

// create a method to get the text from an element
export async function getTextFromElement(page: Page, xpath: string, elementName: string){
    console.log("Getting text from " + elementName)
    let results =  await page.locator("xpath=" + xpath).textContent()
    return results
}