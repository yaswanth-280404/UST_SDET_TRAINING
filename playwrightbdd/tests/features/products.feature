@tag1
Feature: Product Functionality

Background: User is logged in
Given User is on the login page
When user enters username
And user enters password
And user clicks on the login button
Then User is logged in successfully

@regression @sanity @addProduct
Scenario: Adding a product to a cart
Given User is logged in
When User clicks on a product
Then the product description is available
When user clicks on add to cart button
Then the product is added to the cart
When User clicks on the cart menu
Then the cart is opened
And user is able to view the added product


@regression @viewProduct
Scenario: View a product description
Given User is logged in
When User clicks on a product
Then the product description is available
And user is able to see the entire product description