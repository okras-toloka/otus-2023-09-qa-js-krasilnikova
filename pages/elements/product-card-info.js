class ProductCardInfo {

    constructor(page) {
        this.page = page;
        this.root = page.locator('.overview');
        this.add_to_cart = page.locator('.add-to-cart-button');
    }

    async visibleCardInfo() {
        await this.add_to_cart.waitFor({state: "visible"})
    }

    async clickAddToCart() {
        await this.add_to_cart.click();
    }
}

module.exports = ProductCardInfo