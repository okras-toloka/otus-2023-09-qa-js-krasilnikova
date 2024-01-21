class Header {

    constructor(page){
        this.page = page;
        this.logo = page.locator('.header-logo a');
        this.register = page.locator('.ico-register');
        this.login = page.locator('.ico-login');
        this.logout = page.locator('.ico-logout')
        this.cart = page.locator('.ico-cart');
        this.cartCount = page.locator('[class="cart-qty"]')
        this.barSuccess = page.locator('#bar-notification')
        this.authLogin = page.locator('.header-links .account')
    }

    async clickToLogo(){
    }

    async clickToCart(){
    }

    async goToRegistrationPage(){
        await this.register.click()
    }

    async visibleBarSuccess(){
        await this.barSuccess.waitFor({state: "visible"})
    }

    async authLoginText() {
        return await this.authLogin.textContent();
    }

    async clickToLogOut(){
        await this.logout.click()
    }
}

module.exports = Header;