import {Activity} from "@/classes/activity/Activity";

export class DriveDocument extends Activity {
    constructor(docName, docType, user, time, dayOffset, type) {
        super(user, time, dayOffset, type)
        this.docName = docName;
        this.docType = docType;
    }

    static DOC_TYPES = Object.freeze({
        'DOC': 'document',
        'SHEET': 'spreadsheet',
        'SLIDES': 'slideshow'
    })
}