class ProductList {

    constructor(page) {
        this.page = page;
        this.title = page.locator('.page-title');
        this.product_grid = page.locator('.product-grid')
    }

    async openProductList(str){
        await this.page.goto(`/${str}`)
    }

    async visibleTitle() {
        await this.title.waitFor({state: "visible"})
    }

    async visibleProductGrid() {
        await this.product_grid.waitFor({state: "visible"})
    }
}

module.exports = ProductList