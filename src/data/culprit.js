import {Email} from "@/classes/activity/Email";
import {Search} from "@/classes/activity/Search";
import {Visit} from "@/classes/activity/Visit";
import {DriveCreate} from "@/classes/activity/DriveCreate";
import {DriveDocument} from "@/classes/activity/DriveDocument";
import {DriveAdd} from "@/classes/activity/DriveAdd";
import {DriveRename} from "@/classes/activity/DriveRename";
import {DriveDelete} from "@/classes/activity/DriveDelete";
import {DriveEmpty} from "@/classes/activity/DriveEmpty";

export const AnonymousMessage = `Mwa ha ha ha! You'll never figure out who I am! I'm going to email all the teachers in the school!

`
export const AnonymousMessageSubject = 'MWA HA HA HA';

export const AnonymousMessageTime = `10:32 AM`;

export const Culprit = user => {
    const docEvilName = 'Anonymous email messages';
    const docSanitizedName = 'Lesson Plan';
    const docType = DriveDocument.DOC_TYPES.DOC;
    return [
        new Search('how to spell anonamus', user, '9:24 AM', 0),
        new Visit('Anonymous - Free Online Dictionary', {minutes: 1}, user, '9:25 AM', 0),

        new Email('@CULPRIT', 'Anonymous Test',`
        Dear me,
        I'm testing to see if I can send an anonymous email. I want to see if my name shows up on this message.`, user, "9:31 AM",0),

        new Email('@CULPRIT', 'Another Test',`
        Dear me,
        The last one didn't work, but I'm trying again.`, user, "9:32 AM",0),

        new DriveCreate(docEvilName, docType, user, "9:38 AM", 0),
        new DriveAdd(`Anonymous email ideas:
        ${AnonymousMessage}\n...`, docEvilName, docType, user, "9:39 AM", 0),



        new DriveRename(docSanitizedName, docEvilName, docType, user, "11:08 AM", 0),

        new DriveDelete(docSanitizedName, docType, user, "11:12 AM", 0),

        new DriveEmpty(user, "11:13 AM", 0)

    ]
}