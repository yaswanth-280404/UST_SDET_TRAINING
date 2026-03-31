import { Page, Locator, expect } from "@playwright/test";

export class ProductPOM {
    readonly page;
    readonly checkoutButton;
    readonly otpIframe;

    constructor(page: Page) {
        this.page = page;

        this.checkoutButton = page.locator("//div[text()='Proceed to Checkout']");
        this.otpIframe = page.locator("iframe.c-olm-iframe-wrapper");
    }

    async navigate() {
        await this.page.goto("https://www.practo.com/tests?city=bangalore");
    }

    
    getProduct(testName: string): Locator {
        return this.page.locator(
            `//a[contains(@class,'u-pad--std u-border--std')]//div[text()='${testName}']`
        );
    }

    async openProduct(testName: string) {
        const product = this.getProduct(testName);
        await expect(product).toBeVisible();
        await product.click();
    }

    getAddToCartButton(testName: string): Locator {
        return this.page.locator(
            `//div[contains(text(),'${testName}')]/parent::div/parent::a/following-sibling::div/child::div/child::div`
        );
    }

    async addToCart(testName: string) {
        const addBtn = this.getAddToCartButton(testName);
        await expect(addBtn).toBeVisible();
        await addBtn.click();
    }

    async proceedToCheckout() {
        await expect(this.checkoutButton).toBeVisible();
        await this.checkoutButton.click();
    }

    async verifyProductPage(urlPart: string) {
        await expect(this.page).toHaveURL(new RegExp(urlPart));
    }

    async verifyDetailsPage() {
        await expect(this.page).toHaveURL(/user-details/);
    }

    async verifyOTPVisible() {
        await expect(this.otpIframe).toBeVisible();
    }

    async fillUserDetails(
        name: string,
        age: string,
        gender: "MALE" | "FEMALE",
        phone: string,
        email: string
    ) {
        await this.page.getByPlaceholder("John Doe").fill(name);
        await this.page.locator("input[type='number']").fill(age);
        await this.page.locator("select").selectOption("Years");

        await this.page.locator(`input[name='gender'][value='${gender}']`).check();

        await this.page.getByPlaceholder("ex. 91234567890").fill(phone);
        await this.page.getByPlaceholder("you@practo.com").fill(email);

        await this.page.locator("//input[@data-aid='order-continue-button']").click();
    }
}