const { test, expect } = require('@playwright/test')
const MainPage = require('../pages/main-page')
const VerticalMenu = require('../pages/elements/vertical-menu')
const HorizontalMenu = require('../pages/elements/horizontal-menu')
const ProductList = require('../pages/prodict-list-page')
const ProductCard = require('../pages/product-card-page')
const ProductItemGrid = require ('../pages/elements/product-item-grid')
const ProductCardInfo = require ('../pages/elements/product-card-info')
const Header = require('../pages/elements/header')

test('Transition to a category (vertical menu)', async ({ page }) => {
    const mainPage = new MainPage(page);
    const verticalMenu = new VerticalMenu(page)
    const prodictList = new ProductList(page)
    
    await mainPage.openMainPage(); 
    await verticalMenu.visibleVerticalMenu();
    await verticalMenu.clickTopElement(1);

    await expect(page).toHaveURL('/books')
    await expect(prodictList.title).toBeVisible()
});

test('Transition to a subcategory (horizontal menu)', async ({ page }) => {
    const mainPage = new MainPage(page);
    const horizontalMenu = new HorizontalMenu(page)
    const prodictList = new ProductList(page)
    
    await mainPage.open(); 
    await horizontalMenu.visibleHorizontalMenu();
    await horizontalMenu.hoverTopElement(2);
    await horizontalMenu.clickSubElement(2, 1); 

    await expect (page).toHaveURL('/desktops')
    await expect(prodictList.title).toBeVisible()
});

test('Transition to the card (title)', async ({ page }) => {
    const productItemGrid = new ProductItemGrid(page)
    const productList = new ProductList(page)
    const productCard = new ProductCard(page)
  
    await productList.openProductList('books');
    await productList.visibleProductGrid();
    await productItemGrid.clickTitle(1);

    await expect (page).toHaveURL('/computing-and-internet')
    await expect (productCard.title).toBeVisible()
});

test('Add to cart from card', async ({ page }) => {
    const productCard = new ProductCard(page)
    const productCardInfo = new ProductCardInfo(page)
    const header = new Header(page)

    await productCard.openProductCard('computing-and-internet');
    await productCardInfo.visibleCardInfo();
    await productCardInfo.clickAddToCart();

    await expect (header.barSuccess).toBeVisible()
    await expect (header.cartCount).toContainText('1')
});

test('Add to cart from list', async ({ page }) => {
    const productItemGrid = new ProductItemGrid(page)
    const productList = new ProductList(page)
    const header = new Header(page)
    

    await productList.openProductList('books');
    await productList.visibleProductGrid();
    await productItemGrid.clickAddToCart(1); 

    await expect (header.barSuccess).toBeVisible()
    await expect (header.cartCount).toContainText('1')
});