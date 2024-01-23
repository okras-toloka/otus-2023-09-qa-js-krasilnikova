const { test, beforeAll, describe, expect } = require('@playwright/test')


const BasePage = require('../pages/base-page')
const MainPage = require('../pages/main-page')
const CartPage = require('../pages/cart-page')
const RegistrationPage = require('../pages/regisration-page')
const ProductCard = require('../pages/product-card-page')
const ProductCardInfo = require('../pages/elements/product-card-info')
const CheckoutPage = require('../pages/checkout-page')
let doBeforeEach = true;

test.beforeEach (async ({page}) => {
    if (doBeforeEach) {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const regisrationPage = new RegistrationPage(page);
    const productCard = new ProductCard(page);
    const productCardInfo = new ProductCardInfo(page);
    
    await mainPage.openMainPage(); 
    await header.goToRegistrationPage();
    await regisrationPage.typeFirstName();
    await regisrationPage.typeLastName();
    await regisrationPage.typeEmail();
    await regisrationPage.typePassword();
    await regisrationPage.clickToRegistrationButton();
    await regisrationPage.clickToContinueButton(); 

    await productCard.openProductCard('fiction');
    await productCardInfo.visibleCardInfo();
    await productCardInfo.clickAddToCart();
    await header.visibleBarSuccess();
    await header.goToCartPage();
}
})

test('Go to checkout without term of use', async ({ page }) => {
    const cartPage = new CartPage(page)
    
    await cartPage.clickCheckoutButton();

    await expect(page).toHaveURL('/cart') 
    await expect(cartPage.termOfUsePopup).toBeVisible()
    await expect(cartPage.termOfUsePopupText).toContainText('Please accept the terms of service before the next step.')
});

test('Go to checkout with login', async ({ page }) => {
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)
    
    await cartPage.clickTermOfUseCheckbox();
    await cartPage.clickCheckoutButton();

    await expect(page).toHaveURL('/onepagecheckout') 
    await expect(checkoutPage.pageTitle).toContainText('Checkout')
});


test('Success purchase', async ({ page }) => {
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)
    
    await cartPage.clickTermOfUseCheckbox();
    await cartPage.clickCheckoutButton();
    await checkoutPage.fillAddressCountry('66');
    await checkoutPage.fillAddressCity('Yekaterinburg')
    await checkoutPage.fillAddressAddress('Lenina 100')
    await checkoutPage.fillAddressZipCode('111111')
    await checkoutPage.fillAddressPhoneNumber('+700000000')
    await checkoutPage.clickFirstContinue()
    await checkoutPage.clickSecondContinue();
    await checkoutPage.clickThirdContinue();
    await checkoutPage.clickFourthContinue();
    await checkoutPage.clickFifthContinue();
    await checkoutPage.clickCongirmButton();

    await expect(page).toHaveURL('/checkout/completed/') 
    await expect(checkoutPage.pageTitle).toContainText('Thank you')
    await expect(checkoutPage.successCheckoutPageText).toContainText('Your order has been successfully processed!')

});

