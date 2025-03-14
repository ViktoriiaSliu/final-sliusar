const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../pageobjects/login.page.js");
const { expect } = require("chai");
const logger = require("../utils/logger");

Given("I am on the login page", async () => {
  logger.info("Navigating to login page");
  await LoginPage.open();
  logger.info("Login page opened successfully.");
});

When("I enter username {string}", async (username) => {
  logger.info(`Entering username: ${username}`);
  await LoginPage.username.setValue(username);
});

When("I enter password {string}", async (password) => {
  logger.info(`Entering password: ${password}`);
  await LoginPage.password.setValue(password);
});

When('I clear the fields if {string} is "true"', async (clearFields) => {
  if (clearFields === "true") {
    logger.info("Clearing username and password fields...");
    await LoginPage.username.clearValue();
    await LoginPage.password.clearValue();
    logger.info("Fields cleared.");
  } else {
    logger.info("Skipping field clearing.");
  }
});

When("I click on the login button", async () => {
  logger.info("Clicking the login button...");
  await LoginPage.loginButton.click();
  logger.info("Login button clicked.");
});

Then("I should see {string}", async (expectedMessage) => {
  logger.info(`Validating expected message: "${expectedMessage}"`);

  if (expectedMessage === "Swag Labs") {
    const actualTitle = await browser.getTitle();
    logger.info(`Actual page title: "${actualTitle}"`);
    expect(actualTitle).to.equal(expectedMessage);
  } else {
    const actualMessage = await LoginPage.getErrorMessage();
    logger.info(`Actual error message: "${actualMessage}"`);
    expect(actualMessage.toLowerCase()).to.contain(expectedMessage.toLowerCase());
  }
  
  logger.info("Validation completed.");
});
