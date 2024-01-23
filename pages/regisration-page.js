import { createUser } from '../helper/user';

class RegistrationPage {

    constructor(page) {
        this.randomUser = createUser()
        this.page = page;
        this.pageTitle = page.locator('.page-title');
        this.firstBlockTitle = page.locator('.page-body .fieldset:nth-of-type(2) .title strong')
        this.secondBlockTitle = page.locator('.page-body .fieldset:nth-of-type(3) .title strong')
        this.registrationButton = page.locator('#register-button')
        this.firstName = page.locator('#FirstName')
        this.lastName = page.locator('#LastName')
        this.email = page.locator('#Email')
        this.password = page.locator('#Password')
        this.confirmPassword = page.locator('#ConfirmPassword')
        this.validationFirstName = page.locator('span[for="FirstName"]')
        this.validationLastName = page.locator('span[for="LastName"]')
        this.validationEmail = page.locator('span[for="Email"]')
        this.validationPassword = page.locator('span[for="Password"]')
        this.validationConfirmPassword = page.locator('span[for="ConfirmPassword"]')
        this.textSuccessRegistration = page.locator('[class="result"]')
        this.continueButton = page.locator('.button-1[value="Continue"]')
    }

    async visibleTitle() {
        await this.pageTitle.waitFor({state: "visible"})
    }

    async clickToRegistrationButton() {
        await this.registrationButton.click()
    }

    async typeFirstName() {
        await this.firstName.type(this.randomUser.firstName)
    }

    async typeLastName() {
        await this.lastName.type(this.randomUser.lastName)
    }

    async typeEmail() {
        await this.email.type(this.randomUser.email)
    }

    async typePassword() {
        await this.password.type(this.randomUser.password)
        await this.confirmPassword.type(this.randomUser.password)
    }

    async clickToContinueButton() {
        await this.continueButton.click()
    }

}

module.exports = RegistrationPage;