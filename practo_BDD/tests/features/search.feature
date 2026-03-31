Feature: Search Functionality

@searchFunction
Scenario: To validate whether search and click tests
Given user is on the Bangalore login page
When user clicks the search bar
And user types in the test name as "Thyroid AutoAntibodies"
Then the test dropdown box is visible
When user clicks the testname 
Then user will be directed to the product description 


@searchValidation
Scenario Outline: Validate test availability and benefits
Given user is on the Bangalore login page
When user clicks the search bar
And user types in the test name as "<testName>"
Then the test dropdown box is visible
When user clicks the testname "<testName>"
Then user should see availability message "<expectedMessage>"

Examples:
| testName                 | expectedMessage                                      |
| Thyroid AutoAntibodies   | This test is not available in your city             |
| Lipid Profile            | Free Home Sample Pickup on orders above ₹ 500       |