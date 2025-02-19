import Alert from "../../pageobjects/common/common_alert.js";
import PageEpCreateIncident from "../../pageobjects/portal/page_epcreateincident.js";
import PageEpPortal from "../../pageobjects/portal/page_epportal.js";
import PageLogin from "../../pageobjects/login/page_login.js";
import PageSupport from "../../pageobjects/support/page_support.js";
import Field from "../../pageobjects/common/common_field.js";
import PageEditTicketPortal from "../../pageobjects/portal/page_editticketportal.js";

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
        await browser.pause(1000);
        await Alert.btnConfirmationYes.click();
        // await expect(Alert.alertSuccess).toBeDisplayed();
        await browser.pause(1000);
    })

    it ('Edit Ticket', async () => {
        await PageEpPortal.menuMyOpenTicket.click();
        await Field.editnumber('INC-JTG-202502');
        await expect(PageEditTicketPortal.stepBar).toBeDisplayed();
        await browser.pause(1000);
        await PageEditTicketPortal.btnEdit.click();
        await expect(PageEditTicketPortal.inputShortDesc).toBeDisplayed();
        await PageEditTicketPortal.inputShortDesc.addValue(' edit by automation');
        await PageEditTicketPortal.inputDescription.addValue(' edit by automation');
        await PageEditTicketPortal.btnSave.click();
        await expect(Alert.alertConfirmation).toBeDisplayed();
        await browser.pause(1000);
        await Alert.btnConfirmationYes.click();
        await expect(Alert.alertSuccess).toBeDisplayed();
        await browser.pause(1000);
        
    })

    it ('Add Comment Ticket', async () => {
        await PageEpPortal.menuMyOpenTicket.click();
        await Field.editnumber('INC-JTG-202502');
        await expect(PageEditTicketPortal.stepBar).toBeDisplayed();
        await browser.pause(1000);
        await PageEditTicketPortal.inputComment.setValue('Segera dikerjakan yaa..');
        await PageEditTicketPortal.btnSendComment.click();
        await browser.pause(1000);
    })
    
})