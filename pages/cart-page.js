class CartPage {

    constructor(page) {
        this.page = page;
        this.activeStep = page.locator('.active-step'); //dynamic
        this.pageTitle = page.locator('.page-title') 
        this.pageContent = page.locator('.order-summary-content')    
        this.itemRow = page.locator('.cart-item-row')
        this.productName = page.locator('.product-name')
        this.quantity = page.locator('.qty-input')
        this.deleteCheckbox = page.locator('.remove-from-cart [name="removefromcart"]')
        this.updateButton = page.locator('.update-cart-button')
        this.totalRow = page.locator('.product-subtotal')
        this.termOfUseCheckbox = page.locator('#termsofservice[type]')
        this.checkoutButton = page.locator('.checkout-button')
        this.termOfUsePopup = page.locator('.ui-dialog')  
        this.termOfUsePopupText = page.locator('#terms-of-service-warning-box p')
    }

    async clickDeleteCheckbox() {
        await this.deleteCheckbox.click()
    }

    async clickUpdateButton() {
        await this.updateButton.click()
    }

    async changeQuantity(str) {
        await this.quantity.fill(str);
    }
    
    async clickTermOfUseCheckbox() {
        await this.termOfUseCheckbox.click();
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
}

module.exports = CartPage