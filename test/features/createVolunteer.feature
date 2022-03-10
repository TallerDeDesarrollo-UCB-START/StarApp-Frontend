Feature: Start Americas registration page
    In order to be part of projects and events
    As a volunteer
    I want to create my account in Start Americas page

Scenario Outline: Register on Start Americas page
	Given I have browsed to the Start Americas Together homepage       
	When I press the login button at the right corner
    And I press the ¿No tienes cuenta? option
	And I fill '<name>', '<lastname>','<email>','<number>','<password>' and '<confirmation>' in the crear cuenta page
	When I press Crear Cuenta start
    Then the user will be created and can login with my '<mail>' and '<pass>'

Examples:
    | name         | lastname  | e-mail             | number   | password    | confirmation | mail               | pass        |
    | Voluntario   | Start     | volStart@gmail.com | 77113344 | voluntario1 | voluntario1  | volStart@gmail.com | voluntario1 |