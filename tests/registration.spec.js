const { test, expect } = require('@playwright/test')

const BasePage = require('../pages/base-page')
const MainPage = require('../pages/main-page')
const LoginPage = require('../pages/login-page');
const RegistrationPage = require('../pages/regisration-page');
const CartPage = require('../pages/cart-page');
const ProductCard = require('../pages/product-card-page')
const ProductCardInfo = require('../pages/elements/product-card-info')


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
    await regisrationPage.typePassword();
    await regisrationPage.clickToRegistrationButton();

    const authLoginText = await header.authLoginText();

    await expect(page).toHaveURL('/registerresult/1');
    expect(authLoginText).toEqual(regisrationPage.randomUser.email);
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
    expect(authLoginText).toEqual(regisrationPage.randomUser.email);

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

test('Go to checkout without login', async ({ page }) => {
    const cartPage = new CartPage(page)
    const mainPage = new MainPage(page)
    const loginPage = new LoginPage(page)
    const productCard = new ProductCard(page)
    const productCardInfo = new ProductCardInfo(page)
    const header = (new BasePage(page)).header;

    await mainPage.openMainPage();
    await productCard.openProductCard('fiction');
    await productCardInfo.visibleCardInfo();
    await productCardInfo.clickAddToCart();
    await header.goToCartPage(); 
    await cartPage.clickTermOfUseCheckbox();
    await cartPage.clickCheckoutButton();

    await expect(page).toHaveURL('/login/checkoutasguest?returnUrl=%2Fcart') 
    await expect(loginPage.pageTitle).toContainText('Welcome, Please Sign In!')
});