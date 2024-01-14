class Header {

    constructor(page){
        this.page = page;
        this.logo = page.locator('.header-logo a');
        this.register = page.locator('.header-links ul:nth-child(1) li:nth-child(1) a');
        this.login = page.locator('.header-links ul:nth-child(1) li:nth-child(2) a');
        this.cart = page.locator('.header-links ul:nth-child(1) li:nth-child(3) a');
        this.cartCount = page.locator('[class="cart-qty"]')
        this.barSuccess = page.locator('#bar-notification')
    }

    async clickLogo(){
    }

    async clickCart(){
    }

    async visibleBarSuccess(){
        await this.barSuccess.waitFor({state: "visible"})
    }
}

module.exports = Header;