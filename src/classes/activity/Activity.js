export class Activity {
    constructor(user, time, dayOffset, type) {
        this.user = user;
        this.time = time;
        this.dayOffset = dayOffset;
        this.type = type;
    }

    static TYPES = Object.freeze({
        SEARCH: 'SEARCH',
        VISIT: 'VISIT',
        DRIVE_CREATE: 'DRIVE_CREATE',
        DRIVE_DELETE: 'DRIVE_DELETE',
        DRIVE_EMPTY: 'DRIVE_EMPTY',
        DRIVE_ADD: 'DRIVE_ADD',
        DRIVE_REMOVE: 'DRIVE_REMOVE',
        DRIVE_RENAME: 'DRIVE_RENAME',
        EMAIL: 'EMAIL'

    })
}

