import Alert from "../../pageobjects/common/common_alert.js";
import PageEpCreateIncident from "../../pageobjects/portal/page_epcreateincident.js";
import PageEpPortal from "../../pageobjects/portal/page_epportal.js";
import PageLogin from "../../pageobjects/login/page_login.js";
import PageSupport from "../../pageobjects/support/page_support.js";
import Field from "../../pageobjects/common/common_field.js";

describe('Pelaporan Incident oleh Requester', () => {

    it('Login', async () => {
        await PageLogin.OpenBrowser();
        await PageLogin.Login('requester', 'estim', 'Karyawan');
        await expect(browser).toHaveUrl(baseUrlBjtgTest + 'ep.zul');
    })

    it('Create Incident', async () => {
        await PageEpPortal.menuCreateIncident.click();
        await Field.dropdown(PageEpCreateIncident.ddlCategory, 'APLIKASI');
        await Field.dropdown(PageEpCreateIncident.ddlSubCategory, 'BIMA');
        await PageEpCreateIncident.inputSummary.setValue('Test Create Incident Automation');
        await PageEpCreateIncident.inputDescription.setValue('Test Create Incident Automation');
        await PageEpCreateIncident.btnSave.click();
        await expect(Alert.alertConfirmation).toBeDisplayed();
        // await Alert.btnConfirmationYes.click();
        // await expect(Alert.alertSuccess).toBeDisplayed();
        await browser.pause(10000);
    })
})