const { test, expect } = require('@playwright/test')

const BasePage = require('../pages/base-page')
const MainPage = require('../pages/main-page')
const ProductList = require('../pages/prodict-list-page')
const ProductCard = require('../pages/product-card-page')
const ProductItemGrid = require ('../pages/elements/product-item-grid')
const ProductCardInfo = require ('../pages/elements/product-card-info')
const CartPage = require('../pages/cart-page');

test('Transition to the empty cart', async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = (new BasePage(page)).header;
    const cartPage = new CartPage(page);
  
    await mainPage.openMainPage(); 
    await header.goToCartPage();

    await expect (page).toHaveURL('/cart')
    await expect (cartPage.activeStep).toContainText('Cart')
    await expect (cartPage.pageTitle).toContainText('Shopping cart');
    await expect (cartPage.pageContent).toContainText('Your Shopping Cart is empty!')
});

test('Add to cart from card', async ({ page }) => {
    const productCard = new ProductCard(page)
    const productCardInfo = new ProductCardInfo(page)
    const header = (new BasePage(page)).header

    await productCard.openProductCard('computing-and-internet');
    await productCardInfo.visibleCardInfo();
    await productCardInfo.clickAddToCart();

    await expect (header.barSuccess).toBeVisible()
    await expect (header.cartCount).toContainText('1')
});

test('Add to cart from list', async ({ page }) => {
    const productItemGrid = new ProductItemGrid(page)
    const productList = new ProductList(page)
    const header = (new BasePage(page)).header
    
    await productList.openProductList('books');
    await productList.visibleProductGrid();
    await productItemGrid.clickAddToCart(1); 

    await expect (header.barSuccess).toBeVisible()
    await expect (header.cartCount).toContainText('1')
});

test('View item in the cart', async ({ page }) => {
    const productCard = new ProductCard(page)
    const productCardInfo = new ProductCardInfo(page)
    const cartPage = new CartPage(page)
    const header = (new BasePage(page)).header
    
    await productCard.openProductCard('fiction');
    await productCardInfo.visibleCardInfo();
    await productCardInfo.clickAddToCart();
    await header.goToCartPage();

    await expect (cartPage.pageTitle).toContainText('Shopping cart');
    await expect (cartPage.itemRow).toBeVisible()
    await expect (cartPage.productName).toContainText('Fiction');
    await expect (cartPage.quantity).toHaveAttribute('value', String('1'))
});

test('Edit quantity in cart', async ({ page }) => {
    const productCard = new ProductCard(page)
    const productCardInfo = new ProductCardInfo(page)
    const cartPage = new CartPage(page)
    const header = (new BasePage(page)).header
    
    await productCard.openProductCard('fiction');
    await productCardInfo.visibleCardInfo();
    await productCardInfo.clickAddToCart();
    await header.goToCartPage();
    await cartPage.changeQuantity('2');
    await cartPage.clickUpdateButton();

    await expect (cartPage.quantity).toHaveAttribute('value', String('2'))
    await expect (header.cartCount).toContainText('2')
    await expect (cartPage.totalRow).toContainText('48.00')
});


test('Delete item from cart', async ({ page }) => {
    const productCard = new ProductCard(page)
    const productCardInfo = new ProductCardInfo(page)
    const cartPage = new CartPage(page)
    const header = (new BasePage(page)).header
    
    await productCard.openProductCard('fiction');
    await productCardInfo.visibleCardInfo();
    await productCardInfo.clickAddToCart();
    await header.goToCartPage();
    await cartPage.clickDeleteCheckbox();
    await cartPage.clickUpdateButton();

    await expect (cartPage.activeStep).toContainText('Cart')
    await expect (cartPage.pageTitle).toContainText('Shopping cart');
    await expect (cartPage.pageContent).toContainText('Your Shopping Cart is empty!')
    await expect (header.cartCount).toContainText('0')
});