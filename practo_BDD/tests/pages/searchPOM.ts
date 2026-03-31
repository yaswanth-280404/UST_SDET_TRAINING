import { Page, Locator, expect } from "@playwright/test";

export class searchPOM{
    readonly page: Page;
    readonly searchBar;
    readonly suggestionDrop;

    constructor(page: Page){
        this.page = page;
        this.searchBar = page.getByPlaceholder('Search for tests, packages & profiles');
        this.suggestionDrop = page.locator("//div[contains(@class,'c-search__suggestion-container')]");
    }

    async navigateToPage(){
        await this.page.goto("https://www.practo.com/tests?city=bangalore");
    }

    async clickSearch(){
        await this.searchBar.click();
    }

    async fillSearch(testName:string){
        await this.searchBar.fill(testName);
    }


    async clickSuggestion(testName: string){
        await this.page.locator(".c-suggestion__alias-text", { hasText: testName }).first().click();
    }

    async verifyPage(){
        await expect(this.page).toHaveURL(/thyroid-autoantibodies-blood/);
    }
}