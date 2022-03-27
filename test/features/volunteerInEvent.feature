Feature: Participate in events
    In order to help to other people and make an impact to the society
    As a volunteer
    I want to participate in events

Background:
    Given I have browsed to the Start Americas Together login page
    And I have entered "pruebadev@gmail.com" into the email field
    And I have entered "prueba123" into the password field

Scenario Outline: Be part of prueba event
    Given I see the Start Americas Together home page
    And I click on the Explorar Eventos button
    And I should see the events page
    When I press the button of Participar in the test event
    Then I should see the Dejar de Participar button