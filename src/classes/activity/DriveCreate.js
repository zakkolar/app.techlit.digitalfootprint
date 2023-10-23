import {DriveDocument} from "@/classes/activity/DriveDocument";
import {Activity} from "@/classes/activity/Activity";

export class DriveCreate extends DriveDocument {
    constructor(docName, docType, user, time, dayOffset){
        super(docName, docType, user, time, dayOffset, Activity.TYPES.DRIVE_CREATE);
    }
}