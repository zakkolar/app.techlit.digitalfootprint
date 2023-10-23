import {DriveDocument} from "@/classes/activity/DriveDocument";
import {Activity} from "@/classes/activity/Activity";

export class DriveRename extends DriveDocument {
    constructor(newName, docName, docType, user, time, dayOffset){
        super(docName, docType, user, time, dayOffset, Activity.TYPES.DRIVE_RENAME);
        this.newName = newName;
    }
}