// Generated from: tests\features\product.feature
import { test } from "playwright-bdd";

test.describe('View Description', () => {

  test('To view the product description', { tag: ['@viewDescriptionWithParam'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is on the product page', null, { page }); 
    await When('user click on the required product as "Lipid Profile"'); 
    await Then('user is directed to the product page'); 
  });

  test('To add the product to cart and checkout and fill the details', { tag: ['@addToCart'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('user is on the product page', null, { page }); 
    await When('user click on the add to cart button on required product with name as "Lipid Profile"'); 
    await And('user clicks the checkout button'); 
    await Then('user is directed to the details filling page'); 
    await And('User is able to fill the details'); 
  });

  test('To view product description', { tag: ['@viewDescription'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is on the product page', null, { page }); 
    await When('user click on the required lab test', null, { page }); 
    await Then('user is directed to the product description page', null, { page }); 
  });

  test('To validate checkout works or not', { tag: ['@checkoutValid'] }, async ({ Given, Then, And, page }) => { 
    await Given('User is on the product page', null, { page }); 
    await And('User click on the add to cart button on required product with name as "Lipid Profile"', null, { page }); 
    await And('User clicks the checkout button', null, { page }); 
    await Then('User will be directed to the details page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\product.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@viewDescriptionWithParam"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user is on the product page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user click on the required product as \"Lipid Profile\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Lipid Profile\"","children":[{"start":39,"value":"Lipid Profile","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then user is directed to the product page","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@addToCart"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given user is on the product page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When user click on the add to cart button on required product with name as \"Lipid Profile\"","stepMatchArguments":[{"group":{"start":70,"value":"\"Lipid Profile\"","children":[{"start":71,"value":"Lipid Profile","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user clicks the checkout button","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then user is directed to the details filling page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And User is able to fill the details","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":["@viewDescription"],"steps":[{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given user is on the product page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When user click on the required lab test","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then user is directed to the product description page","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":24,"tags":["@checkoutValid"],"steps":[{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User is on the product page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"And User click on the add to cart button on required product with name as \"Lipid Profile\"","stepMatchArguments":[{"group":{"start":70,"value":"\"Lipid Profile\"","children":[{"start":71,"value":"Lipid Profile","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"And User clicks the checkout button","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User will be directed to the details page","stepMatchArguments":[]}]},
]; // bdd-data-end