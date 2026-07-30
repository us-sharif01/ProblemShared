import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test.describe('Sauce Demo Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/');
  });

  test('Valid credentials redirect to inventory', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Locked out user sees error', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.errorMessage).toContainText(
      'Sorry, this user has been locked out.'
    );
  });

  test('Invalid password shows error', async () => {
    await loginPage.login('standard_user', 'wrong_password');
    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match'
    );
  });
});
