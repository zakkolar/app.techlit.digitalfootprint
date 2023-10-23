import {Activity} from "@/classes/activity/Activity";

export class DriveEmpty extends Activity {
    constructor(user, time, dayOffset) {
        super(user, time, dayOffset, Activity.TYPES.DRIVE_EMPTY)
    }
}