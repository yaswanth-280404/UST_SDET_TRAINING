import {test, expect, Page } from "@playwright/test";
import { LoginPOM } from "../pages/login";

let page:Page;
let loginPage: LoginPOM;

test.beforeEach(async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    loginPage = new LoginPOM(page);
});

test.describe("Login with Multiple Ways" , () => {
    test("To validate the login functionality with valid credentials",async({page})=>{
        
        loginPage.performLoginAction("standard_user","secret_sauce");
        let actualValue=await page.getByText("Products").textContent();
        await expect.soft(actualValue).toBe("Products");
        console.log("Test Case 1");
    });
     
    test("To validate the login functionality with invalid credentials",async({page})=>{
        
        loginPage.performLoginAction("locked_out_user","secret_sauce");
        await expect.soft(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Sorry, this user has been locked out.");
        console.log("Test Case 2");
    });

    test("To validate the login functionality with Performance glitch credentials",async({page})=>{
        test.slow();
        loginPage.performLoginAction("performance_glitch_user","secret_sauce");
        let actualValue=await page.getByText("Products").textContent();
        await expect.soft(actualValue).toBe("Products");
        console.log("Test Case 1");
    });
});