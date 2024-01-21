const { userForLogin } = require("../helper/user");

class LoginPage{

    constructor(page){
        this.page = page;
        this.user = userForLogin();
        this.randomUser = createUser()
        this.pageTitle = page.locator('.page-title')
        this.firstBlockTitle = page.locator('.register-block .title strong')
        this.secondBlockTitle = page.locator('.returning-wrapper .title strong')
        this.registrationButton = page.locator('.register-button');
        this.loginButton = page.locator('.login-button');
        this.inputEmail = page.locator('#Email');
        this.inputPassword = page.locator('#Password');
    } 
    async goToRegistrationPage() {
        await this.registrationButton.click()
    }

    async clickLoginButton() {
        await this.loginButton.click()
    }
    
    async typeEmail() {
        await this.inputEmail.type(this.user.email)
    }

    async typePassword() {
        await this.inputPassword.type(this.user.password)
    }

    async typeRandomEmail() {
        await this.inputEmail.type(this.user.email)
    }

    async typeRandomPassword() {
        await this.inputPassword.type(this.user.password)
    }

}

module.exports = LoginPage;