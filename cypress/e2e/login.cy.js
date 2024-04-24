import LoginPage from "../support/page-objects/login-page.po";

describe("Visit Login Page", () => {
  var loginPage = new LoginPage();
  it("and verify login with valid credentials", () => {
    loginPage.visit();
    loginPage.loginTitleText();
    loginPage.usernameInput();
    loginPage.passwordInput();
    loginPage.loginButton();
    loginPage.validLoginData();
    cy.request("dashboard/index").then((response) => {
      expect(response.status).to.eq(200);
      // expect(response.body.url).to.eq("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    });
  });
  it("verify login with invalid credential", ()=>{
    loginPage.visit();
    loginPage.loginTitleText();
    loginPage.usernameInput().type('testuser');
    loginPage.passwordInput().type('password');
    loginPage.loginButton().click();
    loginPage.invalidLoginValidationMessage();
  })
});
