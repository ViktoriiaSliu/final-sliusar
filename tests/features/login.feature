Feature: Login functionality

  Scenario: Login with empty credentials
    Given I open the login page
    When I enter empty credentials
    When I click the login button
    Then I should see an error message for empty username

  Scenario: Login with missing password
    Given I open the login page
    When I enter only a username
    When I click the login button
    Then I should see an error message for missing password

  Scenario: Successful login
    Given I open the login page
    When I enter valid credentials
    When I click the login button
    Then I should see the dashboard title "Swag Labs"
