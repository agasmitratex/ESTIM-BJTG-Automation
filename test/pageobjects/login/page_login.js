import { $ } from '@wdio/globals'
import field from '../common/common_field.js'

class PageLogin {
    get inputUsername () {
        return $('//input[@placeholder="Username"]')
    }
    get inputPassword () {
        return $('//input[@placeholder="Password"]')
    }
    get inputCorporate () {
        return $('//input[@placeholder="Corporate"]')
    }
    get inputCaptcha () {
        return $('//input[@placeholder="Captcha"]')
    }
    get btnLogin () {
        return $('//button[text()="Masuk"]')
    }
    get btnForgotPassword () {
        return $('//span[text()="Forgot Password?"]')
    }
    get btnRegister () {
        return $('//span[text()="Register"]')
    }
    async Login (username, password, corporate) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await field.bandbox(this.inputCorporate, corporate);
        await this.inputCaptcha.click()
        await browser.pause(10000);
        await this.btnLogin.click();
    }
    async OpenBrowser () {
        await browser.url(baseUrlEstimTrial + 'login.zul');
    }
}

export default new PageLogin ();