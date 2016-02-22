Feature: Login
    As a User
    I want to log in

  Scenario: As Manager
      Given I open the site "login"
       When I click on the "loginButton"
        And I set "managerEmail" to the inputfield "email"
        And I click on the "loginNextButton"
        And I set "managerPassword" to the inputfield "loginPassword"
        And I click on the "signInButton"
       Then I expect the url to contain "dashboard"
       When I click on the "navMenu"
        And I click on the "logoutButton"
       Then I expect the url to contain "login"
