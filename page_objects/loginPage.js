"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const configure_1 = require("@codeceptjs/configure");
class LoginPage {
    // Métodos de interacción
    static async fillEmail(email) {
        await configure_1.I.fillField(this.emailField, email);
    }
    static async fillPassword(password) {
        await configure_1.I.fillField(this.passwordField, password);
    }
    static async clickLoginButton() {
        await configure_1.I.click(this.loginButton);
    }
    static async seeErrorMessage(message) {
        configure_1.I.see(message, this.errorMessage);
    }
}
exports.LoginPage = LoginPage;
// Locators
LoginPage.emailField = '[name="email"]';
LoginPage.passwordField = '[name="password"]';
LoginPage.loginButton = '#\\:rd\\:'; // Locator del botón de ingresar escapado
LoginPage.errorMessage = '.error-message'; // Ejemplo de localizador para mensaje de error
