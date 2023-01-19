Feature: Post Create users

Scenario: Create User
    When create a new user
    Then new user successfully created

Scenario: Register successful
    When make a register
    Then is successfully done

Scenario: Register unsuccessful
    When make a register unsuccessful
    Then missing password is displayed

Scenario: Login successful
    When I login with valid data
    Then login is successful

Scenario: Login unsuccessful
    When I inform an invalid data in the login
    Then login is unsuccessful