import { test, expect } from '@playwright/test';

test('Empower Investment Insights', async ({ page }) => {
  await page.goto('https://www.empower.com/');
  await page.getByLabel('Learn', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Investment Insights' }).click();
  await page.evaluate(() => window.scrollTo(0, 150));
  await page.waitForTimeout(1500)
  await page.evaluate(() => window.scrollTo(0, 750));
  await page.waitForTimeout(1500)
  await page.getByRole('link', { name: 'Page 2' }).click();
  await page.waitForTimeout(1500)
  await page.getByPlaceholder('Email*').click();
  await page.waitForTimeout(1500)
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(1500)
  await page.getByPlaceholder('Email*').fill('k');
});