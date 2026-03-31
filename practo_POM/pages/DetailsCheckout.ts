import { Page } from "@playwright/test";

export class DetailsCheckout {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillDetails(name: string, age: string, gender: string, phone: string, email: string){
        await this.page.getByPlaceholder("John Doe").waitFor();

        await this.page.getByPlaceholder("John Doe").fill(name);

        await this.page.locator("input[type='number']").fill(age);

        await this.page.locator("select").selectOption("Years");
        await this.page.locator(`input[name='gender'][value='${gender}']`).check();

        await this.page.getByPlaceholder("ex. 91234567890").fill(phone);

        await this.page.getByPlaceholder("you@practo.com").fill(email);
    }
}