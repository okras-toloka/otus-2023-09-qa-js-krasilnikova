const { test, expect } = require('@playwright/test')

const BasePage = require('../pages/base-page')
const MainPage = require('../pages/main-page')
const LoginPage = require('../pages/login-page');
const RegistrationPage = require('../pages/regisration-page');


test('Transition to registration page', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const regisrationPage = new RegistrationPage(page);
    
    await mainPage.openMainPage(); 
    await header.goToRegistrationPage();

    await expect(page).toHaveURL('/register');
    await expect(regisrationPage.pageTitle).toContainText('Register');
    await expect(regisrationPage.firstBlockTitle).toContainText('Your Personal Details');
    await expect(regisrationPage.secondBlockTitle).toContainText('Your Password');

});


test('Transition to registration page from login page', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const loginPage = new LoginPage(page);
    const regisrationPage = new RegistrationPage(page);
    
    await mainPage.openMainPage(); 
    await header.goToLoginPage();
    await loginPage.goToRegistrationPage();

    await expect(page).toHaveURL('/register');
    await expect(regisrationPage.pageTitle).toContainText('Register');
    await expect(regisrationPage.firstBlockTitle).toContainText('Your Personal Details');
    await expect(regisrationPage.secondBlockTitle).toContainText('Your Password');

});

test('Registration without data (validation)', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const regisrationPage = new RegistrationPage(page);
    
    await mainPage.openMainPage(); 
    await header.goToRegistrationPage();
    await regisrationPage.clickToRegistrationButton();

    await expect(page).toHaveURL('/register');
    await expect(regisrationPage.validationLastName).toContainText('Last name is required.');
    await expect(regisrationPage.validationLastName).toContainText('Last name is required.');
    await expect(regisrationPage.validationEmail).toContainText('Email is required.');
    await expect(regisrationPage.validationPassword).toContainText('Password is required.');
    await expect(regisrationPage.validationConfirmPassword).toContainText('Password is required.');
});

test('Success registration without gender', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const regisrationPage = new RegistrationPage(page);
    
    await mainPage.openMainPage(); 
    await header.goToRegistrationPage();
    await regisrationPage.typeFirstName();
    await regisrationPage.typeLastName();
    await regisrationPage.typeEmail();
    await regisrationPage.typePassword();
    await regisrationPage.clickToRegistrationButton();

    const authLoginText = await header.authLoginText();

    await expect(page).toHaveURL('/registerresult/1');
    expect(authLoginText).toEqual(regisrationPage.user.email);
    await expect(regisrationPage.textSuccessRegistration).toContainText('Your registration completed');
});

test('Continue after registration', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const regisrationPage = new RegistrationPage(page);
    
    await mainPage.openMainPage(); 
    await header.goToRegistrationPage();
    await regisrationPage.typeFirstName();
    await regisrationPage.typeLastName();
    await regisrationPage.typeEmail();
    await regisrationPage.typePassword();
    await regisrationPage.clickToRegistrationButton();
    await regisrationPage.clickToContinueButton();
    
    const authLoginText = await header.authLoginText();

    await expect(page).toHaveURL('/');
    expect(authLoginText).toEqual(regisrationPage.user.email);

});

test('Log out after registration', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const regisrationPage = new RegistrationPage(page);
    
    await mainPage.openMainPage(); 
    await header.goToRegistrationPage();
    await regisrationPage.typeFirstName();
    await regisrationPage.typeLastName();
    await regisrationPage.typeEmail();
    await regisrationPage.typePassword();
    await regisrationPage.clickToRegistrationButton();
    await header.clickToLogOut();

    await expect(page).toHaveURL('/');
    await expect(header.register).toContainText('Register');
});