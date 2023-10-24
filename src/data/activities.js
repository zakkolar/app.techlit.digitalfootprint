import {USERS} from "@/classes/USERS";
import {Search} from "@/classes/activity/Search";
import {Visit} from "@/classes/activity/Visit";
import {DriveAdd} from "@/classes/activity/DriveAdd";
import {DriveCreate} from "@/classes/activity/DriveCreate";
import {DriveDocument} from "@/classes/activity/DriveDocument";
import {DriveDelete} from "@/classes/activity/DriveDelete";
import {DriveRemove} from "@/classes/activity/DriveRemove";
import {DriveRename} from "@/classes/activity/DriveRename";
import {DriveEmpty} from "@/classes/activity/DriveEmpty";
import {Email} from "@/classes/activity/Email";


export const Activities = [];

const DOC = DriveDocument.DOC_TYPES.DOC;

// music teacher frog saga
Activities.push(...[
     new Search("frog eggs in basement", USERS.MUSIC_TEACHER, "6:30 AM", 0),
    new Visit("Frogs in your home? What to do next", {minutes: 10}, USERS.MUSIC_TEACHER, "6:31 AM",0),

    new Search('take care of baby frogs', USERS.MUSIC_TEACHER, "7:48 AM", 0),
    new Visit('Surprisingly expensive pets: Everything you need to know about frog care', {minutes: 5}, USERS.MUSIC_TEACHER, "7:49 AM", 0),
    new Search('where can i sell 77 baby frogs', USERS.MUSIC_TEACHER, "7:54 AM", 0),

    new Search("Teach frogs to sing", USERS.MUSIC_TEACHER, "1:06 PM", 0),

    new Search("Frog band names", USERS.MUSIC_TEACHER, "1:10 PM", 0),

    new DriveCreate("Frog Band", DriveDocument.DOC_TYPES.DOC, USERS.MUSIC_TEACHER, "1:05 PM", 0),

    new DriveAdd(`Frog songs:
    Jumping on Sunshine
    Froggylicious
    I Want to Hold Your (Webbed) Hand
    Amphibian Rhapsody
    Frog Days Are Over
    `, "Frog Band", DriveDocument.DOC_TYPES.DOC, USERS.MUSIC_TEACHER, "1:10 PM", 0),

    new DriveRename("Fall Out Frog", "Frog Band", DriveDocument.DOC_TYPES.DOC, USERS.MUSIC_TEACHER, "1:12 PM", 0),

    new Email('Tiny Tailor', 'Frog costumes', `
    Hello,
    I am looking to purchased some frog-sized costumes for a band I am starting. Would you be able to help?`, USERS.MUSIC_TEACHER, "1:15 PM", 0)



])

// Drama teacher
Activities.push(...[
    new Search('Visit Broadway theater', USERS.DRAMA_TEACHER, '8:32 AM', 0),
    new Visit('Top 50 Broadway Shows', {minutes: 5}, USERS.DRAMA_TEACHER, "8:33 AM", 0),
    new DriveCreate('Shows I want to see', DriveDocument.DOC_TYPES.DOC, USERS.DRAMA_TEACHER, '8:38 AM', 0),
    new DriveAdd(`The Phantom of the Opera
Hamilton
Les Misérables
Wicked
Chicago`, 'Shows I want to see', DriveDocument.DOC_TYPES.DOC, USERS.DRAMA_TEACHER, '8:38 AM', 0),
    new Search('Broadway Ticket Prices', USERS.DRAMA_TEACHER, '8:48 AM', 0),
    new Visit('Broadway prices higher than ever', {minutes: 2}, USERS.DRAMA_TEACHER, '8:49 AM', 0),
    new Search('convince your principal to pay for a Broadway field trip', USERS.DRAMA_TEACHER, '8:51 AM', 0),
    new Email('Principal', 'Broadway field trip',`
    Hello,
    I hope this email finds you well! I was wondering if we could take a field trip to see a Broadway show. I think this would be an excellent educational opportunity for my students. And myself.`,USERS.DRAMA_TEACHER, '8:58 AM', 0)
])

const MATH = USERS.MATH_TEACHER;

// Math teacher
Activities.push(...[
    new Search('coffee near me', MATH, "6:32 AM", 0),
    new Visit("Map - Dunkin' Donuts (closed)", {minutes: 1}, MATH, "6:33 AM", 0),
    new Search('open coffee shop near me', MATH, "6:34 AM", 0),
    new Visit("Map - Starbucks (closed)", {minutes: 1}, MATH, "6:35 AM", 0),
    new Search("Ways to stay awake without coffee", MATH, "6:36 AM", 0),
    new DriveCreate('Meeting notes', DOC, MATH, "1:32 PM", 0)
])

const LIBRARY = USERS.LIBRARY_TEACHER;

// Library teacher
Activities.push(...[
    new Search("How to write a book ending", LIBRARY, "8:05 AM", 0),
    new Visit("Top 100 book endings", {minutes: 13}, LIBRARY, "8:06 AM", 0),
    new Search("Writer's block", LIBRARY, "8:18 AM", 0),
    new Search("can I use someone else's ending for my book", LIBRARY, "8:19 AM", 0),
    new DriveAdd(`Chapter 23
    She woke up to a bright, sunny morning`, 'My Book', DOC, LIBRARY, '8:33 AM', 0),
    new DriveRemove(`bright, sunny morning`, 'My Book', DOC, LIBRARY, "8:34 AM", 0),
    new DriveAdd(`dark, stormy night`, 'My Book', DOC, LIBRARY, '8:35 AM', 0),
])