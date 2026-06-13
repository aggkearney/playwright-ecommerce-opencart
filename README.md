# Playwright E2E Test Suite - OpenCart Ecommerce

This repository contains an End-to-End (E2E) automation testing suite built with **Playwright** and **TypeScript**. The project automates critical user flows on the **OpenCart** demo platform to validate core e-commerce functionalities.

## Automated Test Cases

The suite covers 5 essential e-commerce scenarios located in `tests/example.spec.ts`:

1. **Homepage Load Validation:** Verifies that the homepage loads successfully by checking the page title.
2. **Product Search (Positive):** Searches for an existing product ("iPhone") and verifies that the correct product information is displayed.
3. **Product Search (Negative):** Verifies the application behavior when searching for a non-existing product and confirms that no results are returned.
4. **Add to Cart:** Validates the shopping cart functionality by adding a product and verifying the success notification.
5. **Checkout Navigation:** Automates the user journey from adding a product to reaching the checkout page while handling dynamic UI elements reliably.

## Tech Stack

- **Framework:** Playwright
- **Language:** TypeScript

## Testing Practices

- Global hooks (`beforeEach`)
- Locator-based element targeting
- UI state assertions
- Handling asynchronous UI updates and animations

## Installation & Execution

To run this project locally:

### 1. Clone the repository

```bash
git clone https://github.com/aggkearney/playwright-ecommerce-opencart.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Run tests

```bash
npx playwright test
```

### 5. Run tests in UI Mode

```bash
npx playwright test --ui
```