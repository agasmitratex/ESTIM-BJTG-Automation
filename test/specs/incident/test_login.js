import Alert from "../../pageobjects/common/common_alert.js";
import PageEpCreateIncident from "../../pageobjects/portal/page_epcreateincident.js";
import PageEpPortal from "../../pageobjects/portal/page_epportal.js";
import PageLogin from "../../pageobjects/login/page_login.js";
import PageSupport from "../../pageobjects/support/page_support.js";
import Field from "../../pageobjects/common/common_field.js";

describe('Login Management', () => {

    it('Login', async () => {
        await PageLogin.OpenBrowser();
        await PageLogin.Login('admin.sad', 'estim', 'SRO');
        await expect(browser).toHaveUrl(baseUrlBjtgTest + 'index.zul');
    })
})