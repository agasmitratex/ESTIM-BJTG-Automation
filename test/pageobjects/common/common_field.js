import { $ } from '@wdio/globals';

class Field {
    async dropdown(ddlElement, value) {
        await ddlElement.click();
        await $('//span[normalize-space(text())="' + value + '"]').click();
        await browser.pause(500);
    }

    async bandbox(ddlElement, value) {
        await ddlElement.setValue(value);
    }
}

export default new Field ();