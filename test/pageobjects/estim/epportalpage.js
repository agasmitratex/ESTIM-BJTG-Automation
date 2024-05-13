import { $ } from '@wdio/globals'

class epPortalPage {
    get menuCreateIncident () {
        return $('//span[text()="Create Incident"]')
    }

    async CreateIncident () {
        await this.menuCreateIncident.click();
    }
}

export default new epPortalPage()