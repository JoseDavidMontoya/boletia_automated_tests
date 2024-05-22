const { I } = require('@codeceptjs/configure');
const LoginPage = require('../page_objects/loginPage');


// Given
Given('I am on the login page', () => {
  I.amOnPage('https://www.admin.boletia.com/auth/login'); // Navega a la página de login
  console.log(I);
});

// When
// When('I fill in the email field with {string}', async (email) => {
//   await LoginPage.fillEmail(email); // Utiliza el método del Page Object para llenar el email
// });

// When('I fill in the password field with {string}', async (password) => {
//   await LoginPage.fillPassword(password); // Utiliza el método del Page Object para llenar el password
// });

// When('I click the login button', async () => {
//   await LoginPage.clickLoginButton(); // Utiliza el método del Page Object para hacer clic en el botón
// });

// // Then
// Then('I should see the dashboard', () => {
//   I.see('Dashboard'); // Verifica que el texto "Dashboard" esté presente en la página
// });

