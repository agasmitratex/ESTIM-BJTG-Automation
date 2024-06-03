import PageLogin from "../../pageobjects/login/page_login.js";
import PageForgotPassword from "../../pageobjects/login/page_forgotpassword.js";


describe('Login Page', () => {

    it('Forgot Password', async () => {
        await PageLogin.OpenBrowser();
        await PageLogin.btnForgotPassword.click();
        await expect(PageForgotPassword.popupForgotPassword).toBeDisplayed();
    })

})