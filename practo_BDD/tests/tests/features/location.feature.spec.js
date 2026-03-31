// Generated from: tests\features\location.feature
import { test } from "playwright-bdd";

test.describe('Practo Location Change', () => {

  test('Change location from Bangalore to Chennai', { tag: ['@locationChange'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is on main page', null, { page }); 
    await When('user clicks location dropdown'); 
    await Then('Chennai option should be visible'); 
    await When('user selects location as "Chennai"'); 
    await Then('user is directed to "chennai" page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\location.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@locationChange"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user is on main page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user clicks location dropdown","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Chennai option should be visible","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user selects location as \"Chennai\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Chennai\"","children":[{"start":26,"value":"Chennai","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then user is directed to \"chennai\" page","stepMatchArguments":[{"group":{"start":20,"value":"\"chennai\"","children":[{"start":21,"value":"chennai","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end