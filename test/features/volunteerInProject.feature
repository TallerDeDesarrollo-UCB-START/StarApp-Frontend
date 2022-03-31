Feature: Participate in projects
    In order to help to other people contribute to the constant improvement of society and have new experiences
    As a volunteer
    I want to participate in projects

Background:
    Given I have browsed to the Start Americas Together login page
    And I have entered "lider.team.start@start.com" into the email field
    And I have entered "lider1" into the password field
    And I press the "Iniciar Sesión" button

Scenario: Participate in a Medio Ambiente project
    Given I see the Start Americas Together home page
    And I press the Proyectos button
    And I press the Animales projects
    When I choose a demo project
    And I press the Unirme button
    Then I click on Ver Detalles of the project
    And I press Dejar Proyecto button