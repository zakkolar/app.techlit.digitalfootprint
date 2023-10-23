import {DriveDocument} from "@/classes/activity/DriveDocument";
import {Activity} from "@/classes/activity/Activity";

export class DriveAdd extends DriveDocument {
    constructor(content, docName, docType, user, time, dayOffset){
        super(docName, docType, user, time, dayOffset, Activity.TYPES.DRIVE_ADD);
        this.content = content;
    }
}