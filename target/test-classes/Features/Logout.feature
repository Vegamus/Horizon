Feature:  Logout Functionality with Cucumber

@INN-981
  Scenario: 1- User can log out by using log out button inside profile info and ends up in login page.
    When user on the login page
    And user types the valid "username" and "password" as a driver
    Then user click to login button
    When user click to username
    Then user click to LogOutButton
    And verify user on the login page
@INN-982
  Scenario: 2- The user can not go to the home page again by clicking the step back button after successfully logged out
    When user on the login page
    And user types the valid "username" and "password" as a driver
    Then user click to login button
    When user click to username
    Then user click to LogOutButton
    When user click on the step back button
    Then verify user on the login page

  @INN-983
  Scenario: 3- The user must be logged out if the user close the open tab
    When user on the login page
    And user types the valid "username" and "password" as a driver
    Then user click to login button
    When user close the all tab
    Then user on the login page
    And user verify on the login page