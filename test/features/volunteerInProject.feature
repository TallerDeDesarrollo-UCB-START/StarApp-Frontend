Feature: Participate in projects
    In order to help to other people contribute to the constant improvement of society and have new experiences
    As a volunteer
    I want to participate in projects

Background:
    Given I have browsed to the Start Americas Together login page
    And I have entered "pruebadev@gmail.com" into the email field
    And I have entered "prueba123" into the password field
    When I press the "Iniciar Sesión" button

Scenario: Participate in a Medio Ambiente project
    Given I see the Start Americas Together home page
    And I press the Proyectos button
    And I press the Animales projects
    And I see the diferent projects of Animales
    When I choose a demo project
    And I press the Unirme button
    Then I should see Participando at the right corner of the project