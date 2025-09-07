import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test('test', async ({ page }) => {
    // Initialize the page object
    const Login = new LoginPage(page);
    // Navigate to the login page and perform login using the page object methods
    await Login.gotoLoginPage();
    await Login.login('tomsmith', 'SuperSecretPassword!');
});
