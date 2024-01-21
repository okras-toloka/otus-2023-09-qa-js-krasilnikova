class LoginPage{

    constructor(page){
        this.page = page;
        this.registerButton = page.locator('.register-button')
    } 

}

module.exports = LoginPage;