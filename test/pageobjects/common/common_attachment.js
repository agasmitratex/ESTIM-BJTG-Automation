import { $ } from '@wdio/globals'

class Alert {
    get btnChooseFile () {
        return $('//button[text()="Choose File"]')
    }

    get btnUpload () {
        return $('//button[text()="Upload"]')
    }


}



export default new Alert()