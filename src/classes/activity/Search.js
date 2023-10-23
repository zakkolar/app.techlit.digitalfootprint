import {Activity} from "@/classes/activity/Activity";

export class Search extends Activity {
    constructor(query, user, time, dayOffset) {
        super(user, time, dayOffset, Activity.TYPES.SEARCH);
        this.query = query;
    }
}