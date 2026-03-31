import{test,expect} from '@playwright/test'
import{createBdd} from 'playwright-bdd'
const {Given,When,Then}=createBdd();

//-------------------Created------------------------

// Given('user is on login page', async ({page}) => {
//   await page.goto("https://saucedemo.com");
// });

// When('user enter username', async ({page}) => {
//   await page.locator("#user-name").fill('standard_user');
// });

// When('user enter password', async ({page}) => {
//   await page.locator("#password").fill('secret_sauce');
// });

// When('user clicks on login button', async ({page}) => {
//   await page.locator("#login-button").click();
// });

// Then('User is logged in successfully', async ({page}) => {
//   const actualUrl=await page.url();
//   await expect(actualUrl).toBe("https://www.saucedemo.com/inventory.html");
// });

// Then('user is able to navigate to product page.', async ({page}) => {
//   const logo=await page.locator("//span[text()='Products']").textContent();
//   await expect(logo).toBe("Products");

// });

// //--------------------Created By Yaswanth S (normal tests)-----------------------------

// When('user enters locked username', async ({page}) => {
//   await page.locator("#user-name").fill('locked_out_user');
// });

// Then('user gets an error message', async ({page}) => {
//   const errorMessage=await page.locator("//h3[text()='Epic sadface: Sorry, this user has been locked out.']").textContent();
//   await expect(errorMessage).toBe("Epic sadface: Sorry, this user has been locked out.");
// });

// Then('user is back on Login Page', async ({page}) => {
//   const pageUrl=await page.url();
//   await expect(pageUrl).toBe("https://www.saucedemo.com/");
// });

// //----------------------Created by: Yaswanth S (parameter passed test)------------------

// When('user enter username as {string}', async ({page}, username: string) => {
//   await page.locator("#user-name").fill(username);
// });

// When('user enter password as {string}', async ({page}, password: string) => {
//   await page.locator("#password").fill(password);
// });

// When('user enters locked username as {string}', async ({page}, username: string) => {
//   await page.locator("#user-name").fill(username);
// });



/* 

                                  Created By: Yaswanth S
                                  Description: Parameter passed through Examples



*/

// Given('User is on login page', async ({page}) => {
//   await page.goto("https://saucedemo.com");
// });

// When('User enters {string}', async ({page}, username) => {
//   await page.locator('#user-name').fill(username);
// });

// When('user enter {string}', async ({page}, password) => {
//   await page.locator('#password').fill(password);
// });

// When('user clicks on login button', async ({page}) => {
//   await page.locator('#login-button').click();
// });

// Then('User is logged in successfully', async ({page}) => {
//   const actualUrl = page.url();
//   await expect(actualUrl).toBe('https://www.saucedemo.com/inventory.html');
// });

// Then('User is able to navigate to product page', async ({page}) => {
//   let actualTitle = await page.getByText("Products").textContent();
//   await expect(actualTitle).toBe('Products');
// })


/* 


                                        Created By: Yaswanth S
                                        Description: using data table


*/

Given('User is on login page', async ({page}) => {
  await page.goto("https://saucedemo.com");
});

When('User enters <username> and enter <password>', async ({page}, dataTable) => {
  const userLogin = dataTable.hashes();
  const user = userLogin[1].username;
  const pass = userLogin[2].password;
  await page.locator('#user-name').fill(user);
  await page.locator('#password').fill(pass);
});

When('user clicks on login button', async ({page}) => {
  await page.locator('#login-button').click();
});

Then('User is logged in successfully', async ({page}) => {
  const actualUrl = page.url();
  await expect(actualUrl).toBe('https://www.saucedemo.com/inventory.html');
});

Then('User is able to navigate to product page', async ({page}) => {
  let actualTitle = await page.getByText("Products").textContent();
  await expect(actualTitle).toBe('Products');
});

