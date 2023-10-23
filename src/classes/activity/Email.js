import {Activity} from "@/classes/activity/Activity";

export class Email extends Activity {
    constructor(recipient, subject, body, user, time, dayOffset) {
        super(user, time, dayOffset, Activity.TYPES.EMAIL);
        this.recipient = recipient;
        this.subject = subject;
        this.body = body;
    }
}