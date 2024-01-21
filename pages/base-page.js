const Header = require('./elements/header')
const VerticalMenu = require('./elements/vertical-menu')
const HorizontalMenu = require('./elements/horizontal-menu')

class BasePage {

    constructor(page){
        this.page = page;
        this.header = new Header(page)
        this.verticalMenu = new VerticalMenu(page)
        this.horizontalMenu = new HorizontalMenu(page)
    }
}

module.exports = BasePage;