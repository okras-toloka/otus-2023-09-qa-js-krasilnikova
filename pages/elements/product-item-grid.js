class ProductItemGrid {

    constructor(page) {
        this.page = page;
        this.title = function (num) {
            return page.locator(`.product-grid .item-box:nth-child(${num}) .product-title a`)
        }
        this.add_to_cart = function (num) {
            return page.locator(`.product-grid .item-box:nth-child(${num}) .buttons [type="button"]`)

        }
    }

    async clickTitle(num){
        await this.title(num).click(); 
    }

    async clickAddToCart(num) {
        await this.add_to_cart(num).click(); 
    }
}

module.exports = ProductItemGrid