import { test, expect } from '@playwright/test';

test('Empower Investment Insights', async ({ page }) => {
  console.log('Navigating to Empower homepage');
  await page.goto('https://www.empower.com/');

  console.log('Clicking on Learn');
  await page.getByLabel('Learn', { exact: true }).click();

  console.log('Clicking on Investment Insights');
  await page.getByRole('menuitem', { name: 'Investment Insights' }).click();

  console.log('Scrolling to 150px');
  await page.evaluate(() => window.scrollTo(0, 150));
  await page.waitForTimeout(1500);

  console.log('Scrolling to 750px');
  await page.evaluate(() => window.scrollTo(0, 750));
  await page.waitForTimeout(1500);

  console.log('Clicking on Page 2');
  await page.getByRole('link', { name: 'Page 2' }).click();
  await page.waitForTimeout(1500);

  console.log('Clicking on Email* placeholder');
  await page.getByPlaceholder('Email*').click();
  await page.waitForTimeout(1500);

  console.log('Scrolling to 500px');
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(1500);

  console.log('Filling Email* placeholder with "k"');
  await page.getByPlaceholder('Email*').fill('k');
});