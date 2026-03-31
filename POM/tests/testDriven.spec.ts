import { test, expect, Page } from "@playwright/test";
import { LoginPOM } from "../pages/login";
import { readExcelFile } from "../utils/excelReader";

interface LoginData
{
    username: string;
    password: string;
    expectedOutput: string;
}

let page: Page;
let loginPage: LoginPOM;
const loginUsers: LoginData[] = readExcelFile("login.xlsx","Sheet1");
test.beforeEach(async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    loginPage = new LoginPOM(page);
});

loginUsers.forEach(data => {
    test(`Validate Login with User ${data.username}`, async ({page}) => {
        await loginPage.performLoginAction(data.username,data.password);
        if(data.expectedOutput === "Products")
        {
            let actualValue = await page.getByText("Products").textContent();
            await expect.soft(actualValue).toBe(data.expectedOutput);
        }
        else{
            await expect(page.locator("h3[data-test='error']")).toHaveText(data.expectedOutput);
        }
    });
});