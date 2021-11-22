@VIP
Feature: Login Functionality with Cucumber
  @INN-972
  Scenario Outline:1-login with valid credantials information
    When user on the login page
    Then user types the valid "<username>" and "<password>"
    Then user click to login button
    And verify the page "<Page>"


    Examples:
      | username        | password    | Page            |
      | user10          | UserUser123 | Quick Launchpad |
      | salesmanager101 | UserUser123 | Dashboard       |
      | storemanager85  | UserUser123 | Dashboard       |


  @INN-973
  Scenario Outline:2-The user try to login with invalid credantials information
    When user on the login page
    Then user types the valid "<username>" and "<password>"
    And user click to login button
    Examples:
      | username  | password    |
      | user23    | password    |
      | user10000 | UserUser123 |
      | user      | user        |
@INN-974
  Scenario Outline:3- All users can see their own usernames in profile menu
    When user on the login page
    Then user types the valid "<username>" and "<password>"
    Then user click to login button
    And verify the username "<name>"
    Examples:
      | username        | password    | name     |
      | user10          | UserUser123 | John Doe |
      | salesmanager101 | UserUser123 | John Doe |
      | storemanager85  | UserUser123 | John Doe |
@INN-975
  Scenario Outline:4- "Invalid username or password." error message should be displayed for invalid credentials
    When user on the login page
    Then user types the valid "<username>" and "<password>"
    Then user click to login button
    And verify error massage on the login Page
    Examples:
      | username  | password    |
      | user23    | password    |
      | user10000 | UserUser123 |
      | user      | user        |
@INN-976
  Scenario Outline:5- User should see the password in bullet signs by default
    When user on the login page
    Then user types the valid "<username>" and "<password>"
    And the password should not be displayed
    Examples:
      | username  | password    |
      | user23    | passwordyy  |
      | user10000 | UserUser123 |
      | user      | user        |
@INN-977
  Scenario: 6-User land on the ‘Forgot Password’ page after clicking on the "Forgot your password?" link
    When user on the login page
    And the user should click on the "Forgot your password?" link
    Then verify user on the "Forgot Password" page
@INN-978
  Scenario: 7- User can see "Remember me on this computer" link on the login page and it should be clickable
    When user on the login page
    Then user can able to click on Remember me on this computer button
@INN-979
  Scenario: 8- Verify that user can use "Enter" key from their keyboard on the login page
    Then user on the login page
    Then the user click on the "user input box"
    Then the user types the username as a truck driver and hit the Enter button and the user types the password and hit the Enter button

