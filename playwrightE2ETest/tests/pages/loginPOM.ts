import { Page } from '@playwright/test';

export class LoginPOM {
    readonly page: Page;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;
    readonly errorMessage;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.errorMessage = page.locator("[data-test='error']");
    }

    async enterUserName(uname: string) {
        await this.usernameInput.fill(uname);
    }

    async enterPassword(pass: string) {
        await this.passwordInput.fill(pass);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getErrorText() {
        return await this.errorMessage.textContent();
    }
}