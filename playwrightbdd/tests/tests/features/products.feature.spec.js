// Generated from: tests\features\products.feature
import { test } from "playwright-bdd";

test.describe('Product Functionality', () => {

  test.beforeEach('Background: User is logged in', async ({ Given, When, Then, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is on the login page', null, { page }); 
    await When('user enters username', null, { page }); 
    await And('user enters password', null, { page }); 
    await And('user clicks on the login button', null, { page }); 
    await Then('User is logged in successfully', null, { page }); 
  });
  
  test('Adding a product to a cart', { tag: ['@tag1', '@regression', '@sanity', '@addProduct'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('User is logged in', null, { page }); 
    await When('User clicks on a product', null, { page }); 
    await Then('the product description is available', null, { page }); 
    await When('user clicks on add to cart button', null, { page }); 
    await Then('the product is added to the cart', null, { page }); 
    await When('User clicks on the cart menu', null, { page }); 
    await Then('the cart is opened', null, { page }); 
    await And('user is able to view the added product', null, { page }); 
  });

  test('View a product description', { tag: ['@tag1', '@regression', '@viewProduct'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('User is logged in', null, { page }); 
    await When('User clicks on a product', null, { page }); 
    await Then('the product description is available', null, { page }); 
    await And('user is able to see the entire product description', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\products.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":14,"pickleLine":12,"tags":["@tag1","@regression","@sanity","@addProduct"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user enters username","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user enters password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user clicks on the login button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User is logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given User is logged in","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User clicks on a product","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the product description is available","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When user clicks on add to cart button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the product is added to the cart","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User clicks on the cart menu","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the cart is opened","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And user is able to view the added product","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":24,"tags":["@tag1","@regression","@viewProduct"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user enters username","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user enters password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user clicks on the login button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User is logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User is logged in","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks on a product","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then the product description is available","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And user is able to see the entire product description","stepMatchArguments":[]}]},
]; // bdd-data-end