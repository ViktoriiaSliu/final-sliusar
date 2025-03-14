Feature: Login functionality

  Scenario Outline: Validate login form with various credential combinations
    Given I am on the login page
    When I enter username "<username>"
    And I enter password "<password>"
    And I clear the fields if "<clearFields>" is "true"
    And I click on the login button
    Then I should see "<expectedMessage>"

    Examples:
      | username                | password     | clearFields | expectedMessage                    |
      |                         | anyPass      | true        | Epic sadface: Username is required |
      | validUser               |              | false       | Epic sadface: Password is required |
      | performance_glitch_user | secret_sauce | false       | Swag Labs                          |
