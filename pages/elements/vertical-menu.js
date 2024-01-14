class VerticalMenu {

    constructor(page) {
        this.page = page;
        this.list = page.locator('.block-category-navigation .listbox')
        this.topElement = function(num) {
            return page.locator(`.block-category-navigation .list .inactive:nth-child(${num}) a`)
        }
    }

    async visibleVerticalMenu(){
        await this.list.waitFor({state: "visible"})
    }

    async clickTopElement(num){
        await this.topElement(num).click(); 
    }
}

module.exports = VerticalMenu