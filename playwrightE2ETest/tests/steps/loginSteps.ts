import {test,expect , Page} from '@playwright/test'
import { LoginPOM } from '../pages/loginPOM';
import { createBdd } from 'playwright-bdd';
const {Given, When, Then, Before} = createBdd();
 
let page:Page;
let loginPage: LoginPOM;
 
Before(async function ({page}) {
    loginPage = new LoginPOM(page);
})
 
/*
created by : Yaswanth S
role: test engineer
description: login with valid username
*/
 
Given('user is on login page', async ({page}) => {
    await page.goto("https://saucedemo.com");
});
 
When('user enters username', async ({page}) => {
    await loginPage.enterUserName('standard_user');
});
 
When('user enters password', async ({page}) => {
    await loginPage.enterPassword('secret_sauce');
});
 
When('user clicks on login button', async ({page}) =>{
    await loginPage.clickLoginButton();
})
 
Then('the user is logged in successfully', async ({page}) => {
    const actualURL = page.url();
    await expect(actualURL).toBe('https://www.saucedemo.com/inventory.html')
});
 
Then('User is able to navigate to product page', async ({page}) => {
    const logo=await page.locator("//span[text()='Products']").textContent();
    await expect(logo).toBe("Products");

});
 
// /*
// created by : Madhanegha
// role: test engineer
// description: login with invalid username
// */
 
Given('User is on login page', async ({page}) => {
    await page.goto("https://saucedemo.com");
});
 
When('User enters invalid username', async ({page}) => {
    await loginPage.enterUserName('abcd');
});
 
// /*
// created by : Yaswanth S
// role: test engineer
// description: login with lockedout user
// */
 
Then('User is back on login page', async ({page}) => {
    const actualURL = page.url();
    await expect(actualURL).toBe('https://www.saucedemo.com/')
});
 
When('User enters locked username', async ({page}) => {
    await loginPage.enterUserName('locked_out_user');
});
 
When('User gets an error message', async ({page}) => {
    const errorMsg = await page.locator("//h3[@data-test='error']").textContent();
    await expect(errorMsg).toContain('Epic sadface: Sorry, this user has been locked out.')
});
 
 
Then('the user gets an error message as invalid user', async ({page}) => {
    const errorMsg = await page.locator("//h3[@data-test='error']").textContent();
    await expect(errorMsg).toContain('Epic sadface: Username and password do not match any user in this service')
});