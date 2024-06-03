import { $ } from '@wdio/globals'

class Alert {
    get alertSuccess () {
        return $('//span[text()="Success!"]')
    }

    get alertMandatory () {
        return $('//span[text()="Info!"]')
    }

    get alertConfirmation () {
        return $('//span[text()="Confirmation"]')
    }

    get btnConfirmationYes () {
        return $('//button[contains(text(), "Yes")]')
    }

    get btnConfirmationNo () {
        return $('//button[contains(text(), "No")]')
    }

    async confirmationYes () {
        await this.btnConfirmationYes.waitForClickable();
        await this.btnConfirmationYes.click();
    }

    async confirmationNo () {
        await this.btnConfirmationNo.waitForClickable();
        await this.btnConfirmationNo.click();
    }


}



export default new Alert()