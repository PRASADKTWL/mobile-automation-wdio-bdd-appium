const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');
const dashboardPage = require('../pageobjects/dashboard.page');
const { LOGIN_USERS } = require('../../testdata/testdata');
// Step definition for launching the application
Given(/^I launch the application and log out existing session$/, async function () {
    await loginPage.open();
    await dashboardPage.logoutExitingSession();
});
// Step definition for entering the username
When(/^I enter the username (.*)$/, async function (usernameKey) {
    const username = LOGIN_USERS[usernameKey.toUpperCase()].username;
    await loginPage.enterUsername(username);
});
// Step definition for entering the password
When(/^I enter the password (.*)$/, async function (passwordKey) {

    const password = LOGIN_USERS[passwordKey.toUpperCase()].password;
    await loginPage.enterPassword(password);
});
// Step definition for clicking the login button
When(/^I click the login button$/, async function () {
    await loginPage.clickLoginButton();
});
// Step definition for validating that the Checkout screen is visible
Then(/^I validate checkout screen visible$/, async function () {
    const text = await loginPage.isCheckoutScreenText();
    await expect(text).toContain('Checkout');
});
// Step definition for verifying the error message
Then(/^I should see the error message (.*)$/, async function (messageKey) {
    const message = LOGIN_USERS[messageKey.toUpperCase()].message;
    const errorMessageText = await loginPage.getErrorMessage(message);
    console.log('Error message:', errorMessageText);
    expect(errorMessageText).toBe(message);
});
