import { $ } from '@wdio/globals'

class PageEpPortal {
    get menuCreateIncident () {
        return $('//span[text()="Create Incident" or text()="Buat Insiden"]')
    }

    get menuCreateRequest () {
        return $('//span[text()="Create Request" or text()="Buat Permintaan"]')
    }

    get menuKnowledge () {
        return $('//span[text()="Knowledge" or text()="Pengetahuan"]')
    }

    get menuDashboard () {
        return $('//span[text()="Dashboard" or text()="Dasbor"]')
    }

    get menuMyOpenTicket () {
        return $('//span[@class="z-tab-text" and (text()="My Open Ticket" or text()="Tiket Saya")]')
    }

    get menuMyApproval () {
        return $('//span[@class="z-tab-text" and (text()="My Approval" or text()="Persetujuan saya")]')
    }

}

export default new PageEpPortal()