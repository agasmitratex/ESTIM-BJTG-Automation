import { $ } from '@wdio/globals'

class field {
    async dropdown(ddlElement, value) {
        await ddlElement.click();
        await $('//span[text()="' + value + '"]').click();
        await browser.pause(1000);
    }

    async bandbox(ddlElement, value) {
        await ddlElement.setValue(value);
        // await $('//a[@class="z-bandbox-button"]').click()
        // await $('//span[text()="' + value + '"]').waitForDisplayed();
        // await $('//span[text()="' + value + '"]').click();
    }
}

export default new field ();