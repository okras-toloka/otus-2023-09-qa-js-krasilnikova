class ProductCard {

    constructor(page) {
        this.page = page;
        this.title = page.locator('.product-name');
    }

    async openProductCard(str){
        await this.page.goto(`/${str}`)
    }

    async visibleTitle() {
        await this.title.waitFor({state: "visible"})
    }
}

module.exports = ProductCard