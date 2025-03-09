const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const assert = require('chai').assert;

Given(/^I open the login page$/, async () => {
    await browser.url('/');
});



When(/^I enter empty credentials$/, async () => {
    await LoginPage.enterUsername('');
    await LoginPage.enterPassword('');
});

When(/^I enter only a username$/, async () => {
    await LoginPage.enterUsername('standard_user');
    await LoginPage.enterPassword('');
});

When(/^I enter only a password$/, async () => {
    await LoginPage.enterUsername('');
    await LoginPage.enterPassword('secret_sauce');
});

When(/^I enter valid credentials$/, async () => {
    await LoginPage.enterUsername('performance_glitch_user');
    await LoginPage.enterPassword('secret_sauce');
});

When(/^I clear the inputs$/, async () => {
    await LoginPage.clearInputs();
});

When(/^I clear the password input$/, async () => {
    await LoginPage.clearPassword();
});

When(/^I click the login button$/, async () => {
    await LoginPage.clickLogin();
});



Then(/^I should see an error message for empty username$/, async () => {
    const errorText = await LoginPage.getErrorMessage();
    assert.include(errorText, "Username is required");
});

Then(/^I should see an error message for missing password$/, async () => {
    const errorText = await LoginPage.getErrorMessage();
    assert.include(errorText, "Password is required");
});

Then(/^I should see the dashboard title "(.*)"$/, async (title) => {
    const actualTitle = await browser.getTitle();
    assert.strictEqual(actualTitle, title);
});
