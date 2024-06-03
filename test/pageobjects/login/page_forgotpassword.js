import { $ } from '@wdio/globals';

class PageForgotPassword {

    get popupForgotPassword () {
        return $('//div[text()="Forgot Password"]')
    }

    get inputUserName () {
        return $('/html/body/div[6]/div/div/div[2]/div[4]/div[2]/table/tbody[1]/tr[1]/td[2]/div/input')
    }

    get inputEmail () {
        return $('/html/body/div[6]/div/div/div[2]/div[4]/div[2]/table/tbody[1]/tr[2]/td[2]/div/input')
    }

    get btnSend () {
        return $('//button[text()=" Send"]')
    }

    get btnSend () {
        return $('//button[text()=" Cancel"]')
    }

}

export default new PageForgotPassword ();