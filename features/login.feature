Feature: Login to SauceLabs mobile application

  Background:
    Given I launch the application and log out existing session

  @noCredentials
  Scenario Outline: Validate no username and no password
    When I click the login button
    Then I should see the error message NO_CREDENTIALS

    Examples:
      | message        |
      | NO_CREDENTIALS |

  @usernameNoPassword
  Scenario Outline: Validate enter username but no password
    When I enter the username NO_PASSWORD
    Then I click the login button
    Then I should see the error message NO_PASSWORD

    Examples:
      | username    | message     |
      | NO_PASSWORD | NO_PASSWORD |

  @invalidUser
  Scenario Outline: Invalid username and password
    When I enter the username INVALID_USER
    Then I enter the password INVALID_USER
    Then I click the login button
    Then I should see the error message INVALID_USER

    Examples:
      | username     | password     | message      |
      | INVALID_USER | INVALID_USER | INVALID_USER |

  @lockedUser
  Scenario Outline: Locked username and password
    When I enter the username LOCKED_USER
    Then I enter the password LOCKED_USER
    Then I click the login button
    Then I should see the error message LOCKED_USER

    Examples:
      | username    | password    | message     |
      | LOCKED_USER | LOCKED_USER | LOCKED_USER |

  @validUser
  Scenario Outline: Valid username and password
    When I enter the username STANDARD_USER
    Then I enter the password STANDARD_USER
    Then I click the login button
    Then I validate checkout screen visible

    Examples:
      | username      | password      |
      | STANDARD_USER | STANDARD_USER |
