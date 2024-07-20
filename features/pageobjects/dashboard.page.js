const { $ } = require('@wdio/globals');

class DashboardPage {
    // Getter for the iconHamburger Menu icon button
    get iconHamburgerMenu() { return $('//android.view.ViewGroup[@content-desc=\"open menu\"]/android.widget.ImageView'); }
    // Getter for the Logout button
    get btnLogout() { return $('//android.widget.TextView[@text=\"Log Out\"]'); }
    // Getter for Confirm Logout button
    get btnConfirmLogout() { return $('//android.widget.Button[@resource-id=\"android:id/button1\"]'); }
     // Getter for OK button
     get btnOk() { return $('//android.widget.Button[@resource-id=\"android:id/button1\"]'); }

   
    // Method to simulate opening the application
    async open() {
        console.log('Application launched');
    }
    
    // Method to logoutExitingSession
    async logoutExitingSession() {
        await this.iconHamburgerMenu.click();
        await this.btnLogout.click();
        await this.btnConfirmLogout.click();
        await this.btnOk.click();
        console.log('Logged out existing session');
    }
}
// Exporting an instance of the DashboardPage class
module.exports = new DashboardPage();
