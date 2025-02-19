import { $ } from '@wdio/globals'

class PageEpPortal {
    get btnFilter () {
        return $('//span[contain(@class, "z-icon-sort-amount-desc")]')
    }

    get btnRefresh () {
        return $('//span[contain(@class, "z-icon-refresh")]')
    }

}

export default new PageMyOpenTicket()