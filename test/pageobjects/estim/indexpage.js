import { $ } from '@wdio/globals'

class indexPage {
    get btnSwitchRole () {
        return $('//span[text()="Switch Role"]')
    }

    async SwitchRole () {
        await this.btnSwitchRole.click();
    }


}

export default new indexPage()