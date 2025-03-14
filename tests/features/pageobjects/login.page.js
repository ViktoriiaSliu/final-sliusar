const logger = require("../utils/logger");

class LoginPage {
  // Selectors
  get username() {
    return $("#user-name");
  }
  get password() {
    return $("#password");
  }
  get loginButton() {
    return $("#login-button");
  }
  get errorMessage() {
    return $(".error-message-container");
  }

  // Open the login page
  async open() {
    logger.info("Opening the login page");
    await browser.url("https://www.saucedemo.com/");
  }

  // Enter username
  async enterUsername(username) {
    logger.info(`Entering username: ${username}`);
    await this.username.setValue(username);
  }

  // Enter password
  async enterPassword(password) {
    logger.info(`Entering password`);
    await this.password.setValue(password);
  }

  // Clear fields
  async clearFields() {
    logger.info("Clearing fields");
    await this.username.setValue("");
    await this.password.setValue("");

    expect(await this.username.getValue()).to.equal("");
    expect(await this.password.getValue()).to.equal("");
  }

  // Click login button
  async clickLogin() {
    logger.info("Clicking the login button");
    await this.loginButton.click();
  }

  // Get error message text
  async getErrorMessage() {
    await this.errorMessage.waitForDisplayed({ timeout: 2000 });
    const errorText = await this.errorMessage.getText();
    logger.error(`Login error message displayed: ${errorText}`);
    return errorText;
  }
}

module.exports = new LoginPage();
