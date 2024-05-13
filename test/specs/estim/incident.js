import alert from "../../pageobjects/estim/alert.js";
import epcreateincident from "../../pageobjects/estim/epcreateincident.js";
import epportalpage from "../../pageobjects/estim/epportalpage.js";
import estimloginpage from "../../pageobjects/estim/estimloginpage.js";
import indexpage from "../../pageobjects/estim/indexpage.js";

describe('Incident Management', () => {

    it('Forgot Password', async () => {
        await estimloginpage.OpenBrowser();
        await estimloginpage.ForgotPassword();
        const headerForgotPassword = await $('//div[text()="Forgot Password"]');
        await expect(headerForgotPassword).toBeDisplayed();
    })

    it('Login Sukses', async () => {
        await estimloginpage.OpenBrowser()
        await estimloginpage.Login('admin.sad', 'estim', 'Solusi Alih Daya');
        await expect(browser).toHaveUrl('https://estim-trial.com/ende/index.zul');
        await browser.pause(1000)
    })

    it('Switch Role', async () => {
        await indexpage.SwitchRole();
        await expect(browser).toHaveUrl('https://estim-trial.com/ende/ep.zul');
    })


    it('Form Create Incident', async () => {
        await epportalpage.CreateIncident()
        await epcreateincident.Category('General');
        await epcreateincident.SubCategory('HR');
        await epcreateincident.Summary('Test Automation dari WDIO ketiga');
        await epcreateincident.Description('Deskripsi dari Test Automation dari WDIO keempat');
        await epcreateincident.Save();
        await expect(alert.alertConfirmation).toBeDisplayed();
        await alert.confirmationYes();
        await expect(alert.alertSuccess).toBeDisplayed();
    })


})