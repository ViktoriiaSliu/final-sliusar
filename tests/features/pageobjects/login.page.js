class LoginPage {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('.error-message-container'); }

    async enterUsername(username) {
        await this.usernameInput.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clearInputs() {
        await this.usernameInput.clearValue();
        await this.passwordInput.clearValue();
    }

    async clearPassword() {
        await this.passwordInput.clearValue();
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed({ timeout: 3000 }); 
        return await this.errorMessage.getText();
    }

}

module.exports = new LoginPage();