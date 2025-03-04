import { test, expect, Page, Locator } from '@playwright/test';

export class GoogleSearchResults {

    //initialize/declare the global variables for this page
    readonly page: Page
    readonly SIGNIN_BUTTON: Locator
    

    //contructor method to define the page and the locators
    constructor(page:Page){
        this.page = page
        this.SIGNIN_BUTTON = page.locator("xpath=//*[@id='result-stats']")
    }

 
    
    
}