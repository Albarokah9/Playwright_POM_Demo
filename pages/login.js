exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.username_texbox = page.getByRole('textbox', { name: 'Username' });
        this.password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_button = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage() {
        await this.page.goto('/login');
    }
    async login(username, password) {
        await this.username_texbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
};
