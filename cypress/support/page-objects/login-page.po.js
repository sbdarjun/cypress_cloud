class LoginPage {
  visit() {
    cy.visit("auth/login");
    cy.location("pathname").should("include", "login");
  }
  loginTitleText() {
    return cy.get(".orangehrm-login-title").should("be.visible");
  }
  usernameInput() {
    return cy.get('[name="username"]').should("be.visible");
  }
  passwordInput() {
    return cy.get('[name="password"]').should("be.visible");
  }
  loginButton() {
    return cy.get(".orangehrm-login-button").should("be.visible");
  }
  requiredErrorMessage() {
    return cy.get(".oxd-input-field-error-message");
  }
  invalidLoginValidationMessage(){
    return cy.get('.oxd-alert--error').should("be.visible");
  }
  validLoginData() {
    cy.fixture("logindata").then((data) => {
      this.usernameInput().type(data.users.username);
      this.passwordInput().type(data.users.password);
      this.loginButton().click();
    });
  }
}
export default LoginPage;
