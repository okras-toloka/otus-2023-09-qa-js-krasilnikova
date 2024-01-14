// // @ts-check
// const { test, expect } = require('@playwright/test')

// test('Transition to a category (vertical menu)', async ({ page }) => {
//   await page.goto('/')
//   await page.locator('.block-category-navigation .listbox').waitFor({state: 'visible'})
//   await page.locator('.block-category-navigation .list .inactive:first-of-type a').click()
//   await expect (page).toHaveURL('/books')
//   await expect (page.locator('.page-title')).toBeVisible()
// });


// test('Transition to a subcategory (horizontal menu)', async ({ page }) => {
//   await page.goto('/')
//   await page.locator('.header-menu .top-menu').waitFor({state: 'visible'})
//   await page.locator('.header-menu .top-menu > li:nth-child(2)').hover()
//   await expect(page.locator('.header-menu .top-menu > li:nth-child(2) .firstLevel')).toBeVisible()
//   await page.locator('.header-menu .top-menu > li:nth-child(2) .firstLevel li:first-of-type a' ).click()
//   await expect (page).toHaveURL('/desktops')
//   await expect (page.locator('.page-title')).toBeVisible()
// });

// test('Transition to the card (title)', async ({ page }) => {
//   await page.goto('/books')
//   await page.locator('.product-grid').waitFor({state: 'visible'})
//   await page.locator('.product-grid .item-box:first-of-type .product-title a').click()
//   await expect (page).toHaveURL('/computing-and-internet')
//   await expect (page.locator('.product-name')).toBeVisible()
// });

// test('Add to cart from card', async ({ page }) => {
//   await page.goto('/computing-and-internet')
//   await page.locator('.overview').waitFor({state: 'visible'})
//   await page.locator('#add-to-cart-button-13[type="button"]').click()
//   await expect (page.locator('[class="bar-notification success"]')).toBeVisible()
//   await expect (page.locator('[class="cart-qty"]')).toContainText('1')
// });

// test('Add to cart from list', async ({ page }) => {
//   await page.goto('books')
//   await page.locator('.product-grid .item-box:first-of-type').waitFor({state: 'visible'})
//   await page.locator('.product-grid .item-box:first-of-type .buttons [type="button"]').click()
//   await expect (page.locator('[class="bar-notification success"]')).toBeVisible()
//   await expect (page.locator('[class="cart-qty"]')).toContainText('1')
// });