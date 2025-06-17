import { test, expect } from '@playwright/test';

test('Search for an image on Bing using relative XPath, switch to new tab, and verify visibility', async ({ page, context }) => {
  // Navigate to Bing
  await page.goto('https://www.bing.com');

  await page.waitForTimeout(3000); // Wait for 3 seconds to ensure the page is fully loaded

  // Locate the search box using relative XPath and enter a query
  const searchBox = await page.locator('//*[@name="q"]');
  await searchBox.fill('beautiful landscapes');
  await searchBox.press('Enter');

  // Wait for the first image to load and click it using relative XPath
  const imagesTab = await page.locator('//*[contains(@href, "images")]');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for a new tab to open
    await imagesTab.nth(1).click()
]);

    // Verify the first image is visible in the new tab using relative XPath
    const imageViewer = await newPage.locator('(//*[contains(@class, "viewer")])[1]');
    await expect(imageViewer).toBeVisible();
});
