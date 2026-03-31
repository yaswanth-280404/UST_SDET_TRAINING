import { Page } from "@playwright/test";

export class PractoMainPage {

    readonly page: Page;

    readonly searchBar;
    readonly locationDrop;
    readonly cart;
    readonly suggestion;

    constructor(page: Page){
        this.page = page;

        this.searchBar = page.getByPlaceholder("Search for tests, packages & profiles");
        this.locationDrop = page.locator("//i[@class = 'icon-ic_dropdown c-search__dropdown-icon']");
        this.cart = page.locator("//div[@class = 'c-global-cart u-pointer']");
        this.suggestion = page.locator("//div[contains(@class,'c-search__suggestion-container')]");
    }

    async searchTest(testName: string){
        await this.searchBar.fill(testName);
    }

    async selectSuggestion(testName: string){
        await this.page.locator(`//span[text()='${testName}']`).click();
    }

    async changeLocation(city: string){
        await this.locationDrop.click();
        await this.page.locator(`//div[text()='${city}']/parent::li`).click();
    }

    async openCart() {
        await this.cart.click();
    }

    async clickTest(testName: string){
        await this.page.locator(`//div[text()='${testName}']`).click();
        }

    async proceedToCheckout() {
        await this.page.locator("//a[contains(@href,'user-details')]//div[normalize-space()='Proceed to Checkout']").click();
    }
    
    async addToCart(testName: string) {
        const card = this.page.locator(`//div[text()='${testName}']/following::div[text()='ADD TO CART'][1]`);
        await card.locator("text=ADD TO CART").click();
    }
}