const { userForLogin } = require("../helper/user");

class MyAccountPage{
    constructor(page) {
        this.user = userForLogin()
        this.page = page;
        this.pageTitle = page.locator('.page-title h1')
        this.blockTitle = page.locator('.fieldset .title strong')
        this.genderMale = page.locator('#gender-male')
        this.inputFirstName = page.locator('#FirstName')
        this.inputLastName = page.locator('#LastName')
        this.inputEmail = page.locator('#Email')
        this.saveButton = page.locator('.save-customer-info-button')
    }

    async changeFirstName() {
        await this.inputFirstName.type('No')
    }
    async changeEmail() {
        await this.inputEmail.type('No')
    }

    async clickSaveButton() {
        await this.saveButton.click()
    }

}

module.exports = MyAccountPage