import { $ } from '@wdio/globals'
import field from '../common/common_field.js'

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

    get ddlLocation () {
        return $('/html/body/div[4]/div/div')
    }

    get inputBuilding () {
        return $('//input[@placeholder="Choose Building"]')
    }

    get ddlBuilding () {
        return $('/html/body/div[4]/div/div')
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
        return $('//button[text()="Save"]')
    }

    get btnCancel () {
        return $('//button[text()="Cancel"]')
    }

    // async Category (value) {
    //     await field.dropdown(this.ddlCategory, value);
    // }

    // async SubCategory (value) {
    //     await field.dropdown(this.ddlSubCategory, value);
    // }

    // async ItemCategory (value) {
    //     await field.dropdown(this.ddlItemCategory, value);
    // }

    // async ItemName (value) {
    //     await field.dropdown(this.ddlItemName, value);
    // }

    // async MobileNumber (value) {
    //     await this.inputMobileNumber.setValue(value);
    // }

    // async Location (value) {
    //     await field.bandbox(this.ddlLocation, value);
    // }

    // async Building (value) {
    //     await field.bandbox(this.ddlBuilding, value);
    // }

    // async Summary (value) {
    //     await this.inputSummary.setValue(value);
    // }

    // async Description (value) {
    //     await this.inputDescription.setValue(value);
    // }

    // async Save () {
    //     await this.btnSave.click();
    // }

    // async Cancel () {
    //     await this.btnCancel.click();
    // }

}

export default new PageEpCreateIncident()