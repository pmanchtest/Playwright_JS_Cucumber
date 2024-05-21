Feature: User Login

As a User
I would like to login to view my account

Background: Load login page
Given I am on Home page

Scenario: Login should be successful
Given User click on Sign in and enter valid email "pramod.manchiryala@hotmail.co.uk"
And Click continue
And User enter valid Password "Protected123$"
And User click on sign in button
Then User should be taken to Account details page

