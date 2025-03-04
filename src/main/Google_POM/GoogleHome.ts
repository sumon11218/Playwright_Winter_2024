import { test, expect, Page, Locator, } from '@playwright/test';

export class GoogleHome {

    //initialize/declare the global variables for this page
    readonly page: Page
    readonly SEARCH_FIELD: Locator
    readonly SEARCH_BUTTON : Locator

    //contructor method to define the page and the locators
    constructor(page:Page){
        this.page = page
        this.SEARCH_FIELD = page.locator("xpath=//*[@name='q']")
        this.SEARCH_BUTTON = page.locator("xpath=//*[@name='btnK']")

    }

    // method to search for a keyword on the home page
    async search(keyword: string){
        await this.SEARCH_FIELD.fill(keyword)  
    }
   
    // method to click on the search button
    async clickOnSearchButton(){
        await this.SEARCH_BUTTON.nth(1).click({force:true})
    }


}