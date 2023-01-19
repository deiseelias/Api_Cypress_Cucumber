Feature: Get User

Scenario: List users
    When consult the list of users
    Then all registered users are listed

Scenario: List single user
    When consult a single user
    Then the user is displayed

Scenario: List single user not found
    When consult a user not found
    Then error message displayed

Scenario: List resource
    When consult a list resource
    Then resource displayed

Scenario: List single resource
    When consult a single resource
    Then the resource is displayed

Scenario: List resource not found
    When consult users inexist
    Then error message inexist