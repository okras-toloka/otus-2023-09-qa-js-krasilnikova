const { test, expect } = require('@playwright/test')

const BasePage = require('../pages/base-page')
const MainPage = require('../pages/main-page')
const LoginPage = require('../pages/login-page');
const RegistrationPage = require('../pages/regisration-page');
const MyAccountPage = require('../pages/my-account-page');


test('Transition to login page', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const loginPage = new LoginPage(page);
    
    await mainPage.openMainPage(); 
    await header.goToLoginPage();

    await expect(page).toHaveURL('/login');
    await expect(loginPage.pageTitle).toContainText('Welcome, Please Sign In!');
    await expect(loginPage.firstBlockTitle).toContainText('New Customer');
    await expect(loginPage.secondBlockTitle).toContainText('Returning Customer');

});


test('Success login', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const loginPage = new LoginPage(page);
    
    await mainPage.openMainPage(); 
    await header.goToLoginPage();
    await loginPage.typeEmail();
    await loginPage.typePassword();
    await loginPage.clickLoginButton();

    const authLoginText = await header.authLoginText();

    await expect(page).toHaveURL('/');
    expect(authLoginText).toEqual(loginPage.user.email);
    await expect(header.logout).toContainText('Log out');
});

test('Veiw Customer info', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const loginPage = new LoginPage(page);
    const myAccountPage = new MyAccountPage(page);

    await mainPage.openMainPage(); 
    await header.goToLoginPage();
    await loginPage.typeEmail();
    await loginPage.typePassword();
    await loginPage.clickLoginButton();
    await header.clickLoginText();

    await expect(page).toHaveURL('/customer/info');
    await expect(myAccountPage.pageTitle).toContainText('My account - Customer info');
    await expect(myAccountPage.blockTitle).toContainText('Your Personal Details');
    await expect(myAccountPage.genderMale).toHaveAttribute('checked')
    await expect(myAccountPage.inputFirstName).toHaveAttribute('value', String(loginPage.user.firstName))
    await expect(myAccountPage.inputLastName).toHaveAttribute('value', String(loginPage.user.lastName))
    await expect(myAccountPage.inputEmail).toHaveAttribute('value', String(loginPage.user.email))
});

// test('Edit Customer info', async ({ page }) => { // не понятно как лучше сделать, чтобы не портить пользователя, которго я переиспользую
//     const mainPage = new MainPage(page);
//     const header = (new BasePage(page)).header;
//     const loginPage = new LoginPage(page);
//     const myAccountPage = new MyAccountPage(page);
//     const randomUser = createUser()

//     await mainPage.openMainPage(); 
//     await header.goToLoginPage();
//     await loginPage.typeEmail();
//     await loginPage.typePassword();
//     await loginPage.clickLoginButton();
//     await header.clickLoginText();
//     await myAccountPage.changeFirstName();
//     await myAccountPage.changeEmail();
//     await myAccountPage.clickSaveButton();
//     await page.reload();

//     const authLoginText = await header.authLoginText();

//     await expect(myAccountPage.inputFirstName).toHaveAttribute('value', String('No' + loginPage.user.firstName))
//     await expect(myAccountPage.inputEmail).toHaveAttribute('value', String('No' + loginPage.user.email))
//     expect(authLoginText).toEqual('No' + myAccountPage.user.email);

// });

test('Log out after login', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const loginPage = new LoginPage(page);
    
    await mainPage.openMainPage(); 
    await header.goToLoginPage();
    await loginPage.typeEmail();
    await loginPage.typePassword();
    await loginPage.clickLoginButton();
    await header.clickToLogOut();

    await expect(page).toHaveURL('/');
    await expect(header.register).toContainText('Register');
    await expect(header.login).toContainText('Log in');
});