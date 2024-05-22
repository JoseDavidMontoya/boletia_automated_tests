export declare class LoginPage {
    static emailField: string;
    static passwordField: string;
    static loginButton: string;
    static errorMessage: string;
    static fillEmail(email: string): Promise<void>;
    static fillPassword(password: string): Promise<void>;
    static clickLoginButton(): Promise<void>;
    static seeErrorMessage(message: string): Promise<void>;
}
