import { test, expect, Page } from '@playwright/test';

//create a method to click on a specific element/locator
export async function click(page: Page, xpath: string, elementName: string){
    console.log("Click on " + elementName)
    await page.locator("xpath="+ xpath).click()
}

//create a method to click on matching elements by index
export async function clickByIndex(page: Page, xpath: string, index:number, elementName: string){
    console.log("Click on " + elementName)
    await page.locator("xpath="+ xpath).nth(index).click()
}

//create a method to capture the text
export async function captureText(page: Page, xpath: string, elementName: string){
    console.log("Capture text on " + elementName)
    let result = await page.locator("xpath="+ xpath).textContent()
    return result
}

//create a method to fill/type in a text field
export async function sendKeys(page:Page, xpath:string, userdata:string, elementName:string){
    console.log("Type in " + elementName)
    await page.locator("xpath="+ xpath).fill(userdata)
}