import { test, expect, Page, Locator } from '@playwright/test';

export class GoogleSearchResults {

    //initialize/declare the global variables for this page
    readonly page: Page
    readonly SEARCH_RESULTS_TEXT: Locator
    

    //contructor method to define the page and the locators
    constructor(page:Page){
        this.page = page
        this.SEARCH_RESULTS_TEXT = page.locator("xpath=//*[@id='result-stats']")
    }

    // method to capture the search results and print out the only the number
    async getSearchResults(){
        const searchResults = await this.SEARCH_RESULTS_TEXT.textContent()
        //split by single space to get the number
        const searchResultsArray = searchResults.split(" ")
        console.log("The search number is: "+searchResultsArray[1])
    }
    
    
}