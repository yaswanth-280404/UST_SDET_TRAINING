import {test, expect} from "@playwright/test";
 
test("To validate the login functionality with valid credentials", async ({ page }) => {
    await page.goto("https://www.saucedemo.com");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    
    await page.getByRole("button",{name: "login"}).click();
    let actualValue = await page.getByText("Products").textContent();

    await expect.soft(page.url()).toBe("https://www.saucedemo.com/login.html");
    await expect.soft(actualValue).toBe("Products");




});
/*
test("To validate the login functionality with invalid credentials", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("locked_out_user");
    await page.locator("input[data-test= 'password']").fill("secret_sauce");
    await page.locator(".submit-button").click();

    await expect(page.locator("h3[data-test='error']"))
    .toHaveText("Epic sadface: Sorry, this user has been locked out.")
});
*/

// CLI Option

// npx playwright test       -->   Run all the tests
// npx playwright test filename    --> Runs the specific 
// npx playwright test --headed   --> Run tests in headed browser
// npx playwright test --ui  -->  Run tests in interactive  UI mode 
// npx playwright test --workers 1   -->  Disable Parallel execution 
// npx playwright test filename --debug   --> Execute tests using playwright inspector (Usually for debugging)
// npx playwright codegen    -->    Record test scripts using PLayWright inspector


//Asynchronous nature and Promise handling in PlayWright
//JavaScript is an asynchronous, non-blocking programming operation.

//For example, if you want to automate an web application, the whole code of execution will cause an error i.e. because when the instructions are running synchronously, the execution will not happen one after one rather the instruction will run parallel.

//Promise Handling
//In JS, Promises act as a foundation for asynch functions.
//Promises are kind of object returned by asynch functions.
//The operation is often complete when the promise is returned to the caller, but the promise object offers ways
//There are two outcomes of a promise:
//          Resolve