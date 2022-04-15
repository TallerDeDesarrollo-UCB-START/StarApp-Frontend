Feature: Create a project 
  In order to create a project on the platform
  As a core team on Start Americas Together
  I want to create a new project for the volunteers

Background: 
    Given I have browsed to the Start Americas Together login page
    And I have entered "core.team.auxiliar@star.auxiliar.com" into the email field
    And I have entered "coreteam1" into the password field
    And I press the "Iniciar Sesión" button

Scenario: Create a new Medio Ambiente project
    When the welcome message should be dispayed on the screen
    And click on the Proyectos button
    And the PROYECTOS message should appear on the screen
    And click on the CREAR PROYECTO
    And insert Data of Project
    And press button Medio Ambiente
    And click buttom detalle
    And check the new project is created
    And delete the project
    Then click delete button