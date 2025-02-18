import { $ } from '@wdio/globals'

class PageEpCreateIncident {
    get ddlCategory () {
        return $('//input[@placeholder="Choose Category"]')
    }
    get ddlSubCategory () {
        return $('//input[@placeholder="Choose Sub Category"]')
    }
    get ddlItemCategory () {
        return $('//input[@placeholder="Choose Item Category"]')
    }
    get ddlItemName () {
        return $('//input[@placeholder="Choose Item Name"]')
    }
    get inputMobileNumber () {
        return $('//input[@placeholder="Input Mobile Number"]')
    }
    get inputLocation () {
        return $('//input[@placeholder="Choose Location"]')
    }
    get inputBuilding () {
        return $('//input[@placeholder="Choose Building"]')
    }
    get inputLocationDescription () {
        return $('//input[@placeholder="Input Location Description"]')
    }
    get inputSummary () {
        return $('//input[@placeholder="Input Summary"]')
    }
    get inputDescription () {
        return $('//textarea[@placeholder="Input Description"]')
    }
    get btnSave () {
        return $('//button[text()="Save" or text()="Simpan"]')
    }
    get btnCancel () {
        return $('//button[text()="Cancel" or text()="Batalkan]')
    }
}

export default new PageEpCreateIncident()