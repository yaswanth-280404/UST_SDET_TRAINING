Feature: View Description

@viewDescriptionWithParam
Scenario: To view the product description
Given user is on the product page
When user click on the required product as "Lipid Profile"
Then user is directed to the product page

@addToCart
Scenario: To add the product to cart and checkout and fill the details
Given user is on the product page
When user click on the add to cart button on required product with name as "Lipid Profile"
And user clicks the checkout button
Then user is directed to the details filling page
And User is able to fill the details

@viewDescription
Scenario: To view product description
Given user is on the product page
When user click on the required lab test
Then user is directed to the product description page

@checkoutValid
Scenario: To validate checkout works or not
Given User is on the product page
And User click on the add to cart button on required product with name as "Lipid Profile"
And User clicks the checkout button
Then User will be directed to the details page
