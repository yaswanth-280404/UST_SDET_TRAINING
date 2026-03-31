// Generated from: tests\features\search.feature
import { test } from "playwright-bdd";

test.describe('Search Functionality', () => {

  test('To validate whether search and click tests', { tag: ['@searchFunction'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('user is on the Bangalore login page', null, { page }); 
    await When('user clicks the search bar', null, { page }); 
    await And('user types in the test name as "Thyroid AutoAntibodies"', null, { page }); 
    await Then('the test dropdown box is visible', null, { page }); 
    await When('user clicks the testname'); 
    await Then('user will be directed to the product description', null, { page }); 
  });

  test.describe('Validate test availability and benefits', () => {

    test('Example #1', { tag: ['@searchValidation'] }, async ({ Given, When, Then, And, page }) => { 
      await Given('user is on the Bangalore login page', null, { page }); 
      await When('user clicks the search bar', null, { page }); 
      await And('user types in the test name as "Thyroid AutoAntibodies"', null, { page }); 
      await Then('the test dropdown box is visible', null, { page }); 
      await When('user clicks the testname "Thyroid AutoAntibodies"'); 
      await Then('user should see availability message "This test is not available in your city"', null, { page }); 
    });

    test('Example #2', { tag: ['@searchValidation'] }, async ({ Given, When, Then, And, page }) => { 
      await Given('user is on the Bangalore login page', null, { page }); 
      await When('user clicks the search bar', null, { page }); 
      await And('user types in the test name as "Lipid Profile"', null, { page }); 
      await Then('the test dropdown box is visible', null, { page }); 
      await When('user clicks the testname "Lipid Profile"'); 
      await Then('user should see availability message "Free Home Sample Pickup on orders above ₹ 500"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\search.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@searchFunction"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user is on the Bangalore login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user clicks the search bar","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user types in the test name as \"Thyroid AutoAntibodies\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Thyroid AutoAntibodies\"","children":[{"start":32,"value":"Thyroid AutoAntibodies","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the test dropdown box is visible","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user clicks the testname","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then user will be directed to the product description","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":24,"tags":["@searchValidation"],"steps":[{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given user is on the Bangalore login page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When user clicks the search bar","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And user types in the test name as \"Thyroid AutoAntibodies\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Thyroid AutoAntibodies\"","children":[{"start":32,"value":"Thyroid AutoAntibodies","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the test dropdown box is visible","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When user clicks the testname \"Thyroid AutoAntibodies\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Thyroid AutoAntibodies\"","children":[{"start":26,"value":"Thyroid AutoAntibodies","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then user should see availability message \"This test is not available in your city\"","stepMatchArguments":[{"group":{"start":37,"value":"\"This test is not available in your city\"","children":[{"start":38,"value":"This test is not available in your city","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":25,"tags":["@searchValidation"],"steps":[{"pwStepLine":27,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given user is on the Bangalore login page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When user clicks the search bar","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And user types in the test name as \"Lipid Profile\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Lipid Profile\"","children":[{"start":32,"value":"Lipid Profile","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the test dropdown box is visible","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When user clicks the testname \"Lipid Profile\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Lipid Profile\"","children":[{"start":26,"value":"Lipid Profile","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then user should see availability message \"Free Home Sample Pickup on orders above ₹ 500\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Free Home Sample Pickup on orders above ₹ 500\"","children":[{"start":38,"value":"Free Home Sample Pickup on orders above ₹ 500","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end