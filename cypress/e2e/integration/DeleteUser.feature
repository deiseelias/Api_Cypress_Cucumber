Feature: Delete user

Scenario: Delete user
    Given create a user
    When I delete a new user
    Then user removed successfully