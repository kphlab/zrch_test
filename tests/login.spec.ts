import { test, expect } from '@playwright/test';

test('Login with right username and password ', async ({ page }) => {
  await page.goto('https://www.bnn.in.th');
  await expect(page).toHaveTitle(/BaNANA/);
  await page.getByLabel('เข้าสู่ระบบ').click();
  await expect(page.locator('[data-modal="modal-auth-login"]')).toBeVisible();
  await page.getByPlaceholder('อีเมล').fill('kp1734186@gmail.com');
  await page.getByPlaceholder('รหัสผ่าน').fill('QAtesting001');
  await page.getByRole('dialog').getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('button', { name: 'Kritsana' })).toBeVisible();
});

test('Login with wrong username', async ({ page }) => {
  await page.goto('https://www.bnn.in.th');
  await expect(page).toHaveTitle(/BaNANA/);
  await page.getByLabel('เข้าสู่ระบบ').click();
  await expect(page.locator('[data-modal="modal-auth-login"]')).toBeVisible();
  await page.getByPlaceholder('อีเมล').fill('kp173418@gmail.com');
  await page.getByPlaceholder('รหัสผ่าน').fill('QAtesting001');
  await page.getByRole('dialog').getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByText('อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง')).toBeVisible();
});

test('Login with wrong password ', async ({ page }) => {
  await page.goto('https://www.bnn.in.th');
  await expect(page).toHaveTitle(/BaNANA/);
  await page.getByLabel('เข้าสู่ระบบ').click();
  await expect(page.locator('[data-modal="modal-auth-login"]')).toBeVisible();
  await page.getByPlaceholder('อีเมล').fill('kp1734186@gmail.com');
  await page.getByPlaceholder('รหัสผ่าน').fill('QAtesting');
  await page.getByRole('dialog').getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByText('อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง')).toBeVisible();
});

test('Login with wrong username and password ', async ({ page }) => {
  await page.goto('https://www.bnn.in.th');
  await expect(page).toHaveTitle(/BaNANA/);
  await page.getByLabel('เข้าสู่ระบบ').click();
  await expect(page.locator('[data-modal="modal-auth-login"]')).toBeVisible();
  await page.getByPlaceholder('อีเมล').fill('kp1734@gmail.com');
  await page.getByPlaceholder('รหัสผ่าน').fill('QAtesting');
  await page.getByRole('dialog').getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByText('อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง')).toBeVisible();
});
