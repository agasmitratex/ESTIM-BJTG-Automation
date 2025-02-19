import { $ } from '@wdio/globals'

class PageEditTicketPortal {
    get btnCancel () {
        return $('//button[contains(text(), "Cancel") or contains(text(), "Batalkan")]')
    }

    get btnEdit () {
        return $('//button[contains(text(), "Edit") or contains(text(), "Ubah")]')
    }

    get btnSave () {
        return $('//button[contains(text(), "Save") or contains(text(), "Simpan")]')
    }

    get btnBack () {
        return $('//span[starts-with(@class, "z-icon-times")]')
    }

    get inputShortDesc () {
        return $('//input[@class="z-textbox" and @type="text" and @style="width:500px;"]')
    }

    get inputDescription () {
        return $('//textarea[@class="z-textbox" and @style="width:500px;"]')
    }

    get tabComment () {
        return $('//span[@class="z-tab-text" and (text()="Comment" or text()="Komen")]')
    }

    get tabAttachment () {
        return $('//span[@class="z-tab-text" and (text()="Attachment" or text()="Lampiran")]')
    }
    
    get inputComment () {
        return $('//input[@placeholder="Type your message.."]')
    }

    get btnSendComment () {
        return $('//span[starts-with(@class, "z-icon-location-arrow")]')
    }

    get btnUpload () {
        return $('//button[contains(text(), "Unggah")]')
    }

    get stepBar () {
        return $('//div[starts-with(@class, "z-stepbar")]')
    }

    async commentportal(value){
        await $('//span[contains(text(), "' + value + '")]').click();
    }
}

export default new PageEditTicketPortal()