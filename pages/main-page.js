const BasePage = require("./base-page")

class MainPage extends BasePage{

    constructor(page){
        super(page);
        this.page = page;
    }

    async openMainPage() {
        await this.page.goto('/')
    }
}

module.exports = MainPage;