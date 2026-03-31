import { Page, Locator, expect } from "@playwright/test";

export class locationPOM {
    readonly page: Page;
    readonly locationDropdown: Locator;
    readonly locationPopup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.locationDropdown = page.locator(".c-search__dropdown-icon");
        this.locationPopup = page.locator(".dg-inner-wrapper");
    }

    async navigate() {
        await this.page.goto("https://www.practo.com/tests?city=bangalore");
    }

    async openLocationDropdown() {
        await expect(this.locationDropdown).toBeVisible();
        await this.locationDropdown.click();
    }

    async waitForLocationPopup() {
        await expect(this.locationPopup).toBeVisible();
    }

    getCityOption(city: string): Locator {
        return this.page.locator(".city-selector__city", { hasText: city });
    }

    async selectCity(city: string) {
        const cityOption = this.getCityOption(city);
        await expect(cityOption).toBeVisible();
        await cityOption.click();
    }

    async verifyCityNavigation(city: string) {
        await expect(this.page).toHaveURL(new RegExp(`city=${city.toLowerCase()}`));
    }
}