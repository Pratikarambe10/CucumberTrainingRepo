Feature: Registration of the user
As a new User, I want to enter firstname and lastname as a parameter

Scenario: validate Registration Scenario3
Given the user is on registration page
When he enters "David" and the firstname
And he enters "Scott" as the lastname
Then Login should be success

Scenario: validate Registration Scenario4
Given the user is on registration page
When he enters "David" and the firstname
And he enters "Scott" as the lastname
Then Login should be success