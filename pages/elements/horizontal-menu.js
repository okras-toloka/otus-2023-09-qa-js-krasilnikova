class HorizontalMenu{

    constructor(page) {
        this.page = page;
        this.list = page.locator('.header-menu .top-menu');
        this.topElement = function(topNum){
            return page.locator(`.header-menu .top-menu > li:nth-child(${topNum}) > a`)
        }
        this.subElement = function(topNum, subNum){
            return page.locator(`.header-menu .top-menu > li:nth-child(${topNum}) .firstLevel li:nth-child(${subNum}) a`)
        }
    }

    async visibleHorizontalMenu(){
        await this.list.waitFor({state: "visible"})
    }

    async hoverTopElement(topNum){
        await this.topElement(topNum).hover(); 
    }

    async clickSubElement(topNum, subNum){
        await this.subElement(topNum, subNum).click(); 
    }
}

module.exports = HorizontalMenu