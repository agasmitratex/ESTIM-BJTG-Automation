import { $ } from '@wdio/globals';

class Field {
    async dropdown(ddlElement, value) {
        await ddlElement.click();
        // await $('//span[normalize-space(text())="' + value + '"]').click();
        await $('//span[contains(normalize-space(text()), "' + value + '")]').click();
        await browser.pause(500);
    }

    async radiobutton(value){
        await $('//span[starts-with(@class, "z-radio")]/input[@value="' + value + '"]').click();
        // await $('//input[@value="' + value + '"]/parent::span[starts-with(@class, "z-radio")]').click();
    }

    async bandbox(ddlElement, value) {
        await ddlElement.setValue(value);
    }
}

export default new Field ();