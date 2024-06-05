import Alert from "../../pageobjects/common/common_alert.js";
import PageEpCreateIncident from "../../pageobjects/portal/page_epcreateincident.js";
import PageEpPortal from "../../pageobjects/portal/page_epportal.js";
import PageLogin from "../../pageobjects/login/page_login.js";
import PageSupport from "../../pageobjects/support/page_support.js";
import Field from "../../pageobjects/common/common_field.js";

describe('Incident Management', () => {

    it('Login', async () => {
        await PageLogin.OpenBrowser();
        await PageLogin.Login('admin.sad', 'estim', 'Solusi Alih Daya');
        await expect(browser).toHaveUrl(baseUrlEstimTrial + 'index.zul');
    })

    it('Switch Role', async () => {
        await PageSupport.btnSwitchRole.click();
        await expect(browser).toHaveUrl(baseUrlEstimTrial + 'ep.zul');
    })

    it('Create Incident', async () => {
        await PageEpPortal.menuCreateIncident.click();
        await Field.dropdown(PageEpCreateIncident.ddlCategory, 'Information Technology');
        await Field.dropdown(PageEpCreateIncident.ddlSubCategory, 'Software');
        await Field.dropdown(PageEpCreateIncident.ddlItemCategory, 'Email');
        // await Field.dropdown(PageEpCreateIncident.ddlItemCategory, '');
        await PageEpCreateIncident.inputSummary.setValue('Test Automation dari WDIO biasa');
        await PageEpCreateIncident.inputDescription.setValue('Deskripsi dari Test Automation dari WDIO biasa');
        await PageEpCreateIncident.btnSave.click();
        await expect(Alert.alertConfirmation).toBeDisplayed();
        // await Alert.btnConfirmationYes.click();
        // await expect(Alert.alertSuccess).toBeDisplayed();
        await browser.pause(10000);
    })
})