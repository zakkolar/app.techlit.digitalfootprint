import {USERS} from "@/data/anonymousEmails/USERS";
import {Search} from "@/classes/activity/Search";
import {Visit} from "@/classes/activity/Visit";
import {DriveAdd} from "@/classes/activity/DriveAdd";
import {DriveCreate} from "@/classes/activity/DriveCreate";
import {DriveDocument} from "@/classes/activity/DriveDocument";
import {DriveRemove} from "@/classes/activity/DriveRemove";
import {DriveRename} from "@/classes/activity/DriveRename";
import {Email} from "@/classes/activity/Email";


export const AnonymousPenguinActivities = [];

// frog band saga
AnonymousPenguinActivities.push(...[
     new Search("frog eggs in basement", USERS.FROG_TEACHER, "6:30 AM", 0),
    new Visit("Frogs in your home? What to do next", {minutes: 10}, USERS.FROG_TEACHER, "6:31 AM",0),
    new Search('where can i sell 77 baby frogs', USERS.FROG_TEACHER, "7:54 AM", 0),
    new Search("Teach frogs to sing", USERS.FROG_TEACHER, "1:06 PM", 0),
    new Search("Frog band names", USERS.FROG_TEACHER, "1:10 PM", 0),
    new DriveCreate("Frog Band", DriveDocument.DOC_TYPES.DOC, USERS.FROG_TEACHER, "1:05 PM", 0),
    new DriveAdd(`Frog songs:
    Jumping on Sunshine
    Froggylicious
    I Want to Hold Your (Webbed) Hand
    Amphibian Rhapsody
    Frog Days Are Over
    `, "Frog Band", DriveDocument.DOC_TYPES.DOC, USERS.FROG_TEACHER, "1:10 PM", 0),

    new DriveRename("Fall Out Frog", "Frog Band", DriveDocument.DOC_TYPES.DOC, USERS.FROG_TEACHER, "1:12 PM", 0),

    new Email('Tiny Tailor', 'Frog costumes', `
    Hello,
    I am looking to purchased some frog-sized costumes for a band I am starting. Would you be able to help?`, USERS.FROG_TEACHER, "1:15 PM", 0)
])

// Broadway teacher
AnonymousPenguinActivities.push(...[
    new Search('Visit Broadway theater', USERS.BROADWAY_TEACHER, '8:32 AM', 0),
    new Visit('Top 50 Broadway Shows', {minutes: 5}, USERS.BROADWAY_TEACHER, "8:33 AM", 0),
    new DriveCreate('Shows I want to see', DriveDocument.DOC_TYPES.DOC, USERS.BROADWAY_TEACHER, '8:38 AM', 0),
    new DriveAdd(`The Phantom of the Opera
Hamilton
Les Misérables
Wicked
Chicago`, 'Shows I want to see', DriveDocument.DOC_TYPES.DOC, USERS.BROADWAY_TEACHER, '8:38 AM', 0),
    new Search('Broadway Ticket Prices', USERS.BROADWAY_TEACHER, '8:48 AM', 0),
    new Visit('Broadway prices higher than ever', {minutes: 2}, USERS.BROADWAY_TEACHER, '8:49 AM', 0),
    new Search('convince your principal to pay for a Broadway field trip', USERS.BROADWAY_TEACHER, '8:51 AM', 0),
    new Email('Principal', 'Broadway field trip',`
    Hello,
    I hope this email finds you well! I was wondering if we could take a field trip to see a Broadway show. I think this would be an excellent educational opportunity for my students. And myself.`,USERS.BROADWAY_TEACHER, '8:58 AM', 0)
])

// Coffee teacher
AnonymousPenguinActivities.push(...[
    new Search('coffee near me', USERS.COFFEE_TEACHER, "6:32 AM", 0),
    new Visit("Map - Dunkin' Donuts (closed)", {minutes: 1}, USERS.COFFEE_TEACHER, "6:33 AM", 0),
    new Search('open coffee shop near me', USERS.COFFEE_TEACHER, "6:34 AM", 0),
    new Visit("Map - Starbucks (closed)", {minutes: 1}, USERS.COFFEE_TEACHER, "6:35 AM", 0),
    new Search("Ways to stay awake without coffee", USERS.COFFEE_TEACHER, "6:36 AM", 0),
    new DriveCreate('Meeting notes', DriveDocument.DOC_TYPES.DOC, USERS.COFFEE_TEACHER, "1:32 PM", 0)
])
