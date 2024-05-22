import { I } from '@codeceptjs/configure';

export class LoginPage {

  // Locators
  static emailField = '[name="email"]';
  static passwordField = '[name="password"]';
  static loginButton = '#\\:rd\\:'; // Locator del botón de ingresar escapado
  static errorMessage = '.error-message'; // Ejemplo de localizador para mensaje de error

  // Métodos de interacción
  static async fillEmail(email: string): Promise<void> {
    await I.fillField(this.emailField, email);
  }

  static async fillPassword(password: string): Promise<void> {
    await I.fillField(this.passwordField, password);
  }

  static async clickLoginButton(): Promise<void> {
    await I.click(this.loginButton);
  }

  static async seeErrorMessage(message: string): Promise<void> {
    I.see(message, this.errorMessage);
  }
}

