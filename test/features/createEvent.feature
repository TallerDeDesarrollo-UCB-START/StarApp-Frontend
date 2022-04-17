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
    When the welcome message should be dispayed on the screen
    And click on the eventos button
    And the EVENTOS VIGENTES message should appear on the screen
    And click on the CREAR EVENTO
    And insert Data
    And check the new event is created
    And delete the event
    Then click button
