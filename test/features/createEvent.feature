Feature: Create Event
    In order to help the community through different projects
    As a registered user with leader role
    I want to create an event

Background: 
    Given I have browsed to the Start Americas Together login page
    And I have entered "core.team.auxiliar@star.auxiliar.com" into the email field
    And I have entered "coreteam1" into the password field
    And I press the "Iniciar Sesión" button

Scenario: Create Event
    Given I visit the Events section of main menu 
    And click on the CREAR EVENTO
    When complete the form to create the event 
    Then check the new event is created
    And delete the event