Feature: Check register Volunteer
    In order to be part of projects and events
    As a volunteer
    I want to verify my information in the register form

Scenario: Verify register form
    Given I have browsed to the Start Americas Together register page
    When Insert the data in the form
    Then Verify is correct data
