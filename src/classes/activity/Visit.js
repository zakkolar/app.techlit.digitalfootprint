import {Activity} from "@/classes/activity/Activity";
import {Duration} from "luxon";

export class Visit extends Activity {
    constructor(pageTitle, duration, user, time, dayOffset) {
        super(user, time, dayOffset, Activity.TYPES.VISIT);
        this.duration = Duration.fromObject(duration);
    this.pageTitle = pageTitle;
    }
}
