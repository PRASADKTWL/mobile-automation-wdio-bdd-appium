const { $ } = require('@wdio/globals');

class LoginPage {
    // Getter for the username input field
    get usernameField() { return $('//android.widget.EditText[@content-desc=\"Username input field\"]'); }
    // Getter for the password input field
    get passwordField() { return $('//android.widget.EditText[@content-desc=\"Password input field\"]'); }
    // Getter for the login button
    get loginButton() { return $('//android.view.ViewGroup[@content-desc=\"Login button\"]'); }

    // Method to simulate opening the application
    async open() {
        console.log('Application launched');
    }
    // Method to enter the username into the username field
    async enterUsername(username) {
        await this.usernameField.clearValue();
        await this.usernameField.setValue(username);
    }
    // Method to enter the password into the password field
    async enterPassword(password) {
        await this.passwordField.clearValue();
        await this.passwordField.setValue(password);
    }
    // Method to click the login button
    async clickLoginButton() {
        await this.loginButton.click();
    }
    // Method to check if the Checkout screen is visible
    async isCheckoutScreenText() {
        const checkoutScreen = await $("//android.widget.TextView[@text=\"Checkout\"]");
        const checkoutTxt = await checkoutScreen.getText();
        return checkoutTxt;
    }
    // Method to get the error message text based on the provided message
    async getErrorMessage(message) {
        // Locate the error message element based on the provided message text

        const errorMessageElement = await $(`//android.widget.TextView[@text="${message}"]`);
        //android.widget.TextView[@text=\"Provided credentials do not match any user in this service.\"]"
        // Return the text of the error message element
        return await errorMessageElement.getText();
    }
    // async pause(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
}// Exporting an instance of the LoginPage class

module.exports = new LoginPage();
