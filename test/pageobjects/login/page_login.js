import { $ } from '@wdio/globals'
import field from '../common/common_field.js'
import Field from '../common/common_field.js'

class PageLogin {
    get inputUsername () {
        return $('//input[@placeholder="Username"]')
    }
    get inputPassword () {
        return $('//input[@placeholder="Password"]')
    }
    get inputCaptcha () {
        return $('//input[@placeholder="Captcha"]')
    }
    get btnLogin () {
        return $('//button[text()="Login" or text()="Masuk"]')
    }
    async Login (username, password, status) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await Field.radiobutton(status);
        await this.inputCaptcha.click();
        await browser.pause(10000);
        await this.btnLogin.click();
    }
    async OpenBrowser () {
        await browser.url(baseUrlBjtgTest + 'login.zul');
    }
}

export default new PageLogin ();