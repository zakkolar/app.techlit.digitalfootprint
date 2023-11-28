import {Email} from "@/classes/activity/Email";
import {Search} from "@/classes/activity/Search";
import {Visit} from "@/classes/activity/Visit";
import {DriveCreate} from "@/classes/activity/DriveCreate";
import {DriveDocument} from "@/classes/activity/DriveDocument";
import {DriveAdd} from "@/classes/activity/DriveAdd";
export const Herring = user => {
    const docEvilName = 'Anonymous email messages';
    const docSanitizedName = 'Lesson Plan';
    const docType = DriveDocument.DOC_TYPES.DOC;
    return [

        new Search('school prank ideas', user, "9:10 AM", 0),
        new Visit('Top 10 School Pranks', {minutes: 10}, user, "9:15 AM", 0),
        new DriveCreate('School Pranks', DriveDocument.DOC_TYPES.DOC, user, "9:26 AM", 0),
        new DriveAdd(`Balloon Avalanche: Fill a friend's locker with balloons, so when they open it, they'll be greeted with a colorful surprise.

Desk Swap: With the teacher's permission, rearrange the classroom desks.

Post-It Note Attack: Cover a friend's car or locker with colorful Post-It notes.

Fake Spider or Bug: Place a realistic-looking fake spider or bug in a visible but harmless spot, like a desk or chair.
...`, 'School Pranks', DriveDocument.DOC_TYPES.DOC, user, "9:27 AM", 0),
        new Email('[all-teachers]', 'Beware of pranks', `Hi all,
        I heard in the news that teachers across the country are trying to pull pranks at school. 
        I made a <span class='underline text-blue-600'>list of popular pranks</span> to watch out for. Keep an eye out for suspicious activity.`, user, "9:32 AM", 0),

        new Search('how to send an anonymous email', user, "10:37 AM", 0),
        new Visit('Anonymous emails: A very technical task', {minutes: 1}, user, "10:38 AM", 0),

         new Email('[all-teachers]', 'Stumped', `Hi all,
        The pranks seem to have started. You might have seen an anonymous email. I tried to figure out how they sent the message, but I couldn't understand the instructions I found. I will keep looking.`, user, "10:43 am", 0),

        new Search('dinner recipes', user, "11:40 AM", 0),
        new Visit('Pickled Red Herring Recipe', {minutes: 2}, user, "11:41 AM", 0),




    ]
}