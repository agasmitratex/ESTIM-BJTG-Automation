import { $ } from '@wdio/globals'

class PageEpPortal {
    get menuCreateIncident () {
        return $('//span[text()="Create Incident"]')
    }

    // async CreateIncident () {
    //     await this.menuCreateIncident.click();
    // }
}

export default new PageEpPortal()