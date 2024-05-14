import { $ } from '@wdio/globals'
import field from './field.js'

class estimLoginPage {
    get inputUsername () {
        // return $('/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/table/tbody[1]/tr/td/div/div/div[2]/div/input')
        return $('//input[@placeholder="Username"]')
    }
    get inputPassword () {
    //     return $('/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/table/tbody[1]/tr/td/div/div/div[3]/div/input')
    return $('//input[@placeholder="Password"]')
    }
    get inputCorporate () {
        // return $('/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/table/tbody[1]/tr/td/div/div/div[4]/div/span/input')
        return $('//input[@placeholder="Corporate"]')
    }
    get ddlCorporate () {
        return $('/html/body/div[4]/div/div')
        // return $('//div')
    }
    get inputCaptcha () {
        // return $('/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/table/tbody[1]/tr/td/div/div/div[5]/div/div[3]/input')
        return $('//input[@placeholder="Captcha"]')
    }
    get btnLogin () {
        // return $('/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/table/tbody[1]/tr/td/div/div/div[7]/button')
        return $('//button[text()="Masuk"]')
    }
    get btnForgotPassword () {
        // return $('/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/table/tbody[1]/tr/td/div/div/div[6]/a/span')
        return $('//span[text()="Forgot Password?"]')
    }
    get btnRegister () {
        // return $('/html/body/div[1]/div[2]/div/div[1]/div/div/div[2]/table/tbody[1]/tr/td/div/div/div[8]/div/div/div[2]/a/span')
        return $('//span[text()="Register"]')
    }

    async Login (username, password, corporate) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await field.bandbox(await this.inputCorporate, corporate);
        await this.inputCaptcha.click();
        // await this.inputCorporate.setValue(corporate)
        // await $('//span[text()="' + corporate + '"]').waitForClickable();
        // await $('//span[text()="' + corporate + '"]').click();
        await browser.pause(10000);
        await this.btnLogin.click();
    }

    async Register () {
        await this.btnRegister.click();
    }

    async ForgotPassword () {
        await this.btnForgotPassword.click();
    }

    async OpenBrowser () {
        await browser.url('https://estim-trial.com/ende/login.zul');
    }
}

export default new estimLoginPage ();