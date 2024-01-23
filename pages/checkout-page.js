class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.pageTitle = page.locator('.page-title h1');
        this.addressCountry = page.locator('select#BillingNewAddress_CountryId '); 
        this.addressCity = page.locator('#BillingNewAddress_City'); 
        this.addressAddress = page.locator('#BillingNewAddress_Address1'); 
        this.addressZipCode = page.locator('#BillingNewAddress_ZipPostalCode'); 
        this.addressPhoneNumber = page.locator('#BillingNewAddress_PhoneNumber'); 
        this.firstContinue = page.locator('#billing-buttons-container .new-address-next-step-button'); 
        this.secondContinue = page.locator('#shipping-buttons-container .new-address-next-step-button'); 
        this.thirdContinue = page.locator('#shipping-method-buttons-container .shipping-method-next-step-button')
        this.fourthContinue = page.locator('.payment-method-next-step-button')
        this.fifthContinue = page.locator('.payment-info-next-step-button')  
        this.congirmButton = page.locator('.confirm-order-next-step-button')
        this.successCheckoutPageText = page.locator('.order-completed strong') 


    }
    async fillAddressCountry(str) {
        await this.addressCountry.selectOption({ value: str})
    }

    async fillAddressCity(str) {
        await this.addressCity.type(str)
    }

    async fillAddressAddress(str) {
        await this.addressAddress.type(str)
    }

    async fillAddressZipCode(str) {
        await this.addressZipCode.type(str)
    }

    async fillAddressPhoneNumber(str) {
        await this.addressPhoneNumber.type(str)
    }

    async clickFirstContinue() {
        await this.firstContinue.click()
    }

    async clickSecondContinue() {
        await this.secondContinue.click()
    }

    async clickThirdContinue() {
        await this.thirdContinue.click()
    }

    async clickFourthContinue() {
        await this.fourthContinue.click()
    }

    async clickFifthContinue() {
        await this.fifthContinue.click()
    }

    async clickCongirmButton() {
        await this.congirmButton.click()
    }

}

module.exports = CheckoutPage