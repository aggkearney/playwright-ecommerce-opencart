import { test, expect } from '@playwright/test';

// Optimize navigation for all tests in the file
test.beforeEach(async ({ page }) => {
  await page.goto('https://opencart.abstracta.us/index.php?route=common/home', { 
    waitUntil: 'commit' 
  });
});

test('Test 1: Verify page title', async ({ page }) => {
  // Verify that the browser tab title is correct
  await expect(page).toHaveTitle(/Your Store/);
});

test('Test 2: Search for an existing product', async ({ page }) => {
  const searchInput = page.locator('#search > input');
  await searchInput.fill('iPhone');
  await searchInput.press('Enter');

  // Verify that the product description text is visible in the results
  const productDescription = page.locator('text="iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name o.."');
  await expect(productDescription).toBeVisible();
});

test('Test 3: Search for a non-existing product', async ({ page }) => {
  const searchInput = page.locator('#search > input');
  await searchInput.fill('LG');
  await searchInput.press('Enter');

  // Verify that the specific "no results" paragraph element is visible
  const productCards = page.locator('.product-layout');
  await expect(productCards).toHaveCount(0);
});

test('Test 4: Add the first product to the cart', async ({ page }) => {
  // Locate the first "Add to Cart" button found on the homepage
  const addToCartButton = page.locator('button:has-text("Add to Cart")').first(); 
  await addToCartButton.click();

  // Verify that the cart total updates correctly
  const cartTotal = page.getByText('Success: You have added');
  await expect(cartTotal).toBeVisible();
});

test('Test 5: Proceed to checkout with a product in the cart', async ({ page }) => {
  // Add product to cart
  await page.locator('button:has-text("Add to Cart")').first().click();

  // Click on the permanent Checkout link at the top header bar using its CSS path
  await page.locator('#top-links a:has-text("Checkout")').click();

  // Assertions
  await expect(page).toHaveURL(/.*checkout/);
  const checkoutHeader = page.locator('h1:has-text("Checkout")');
  await expect(checkoutHeader).toBeVisible();
});