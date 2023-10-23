export const RelativeDate = function(date) {


    const days = date.diffNow('days').days;


    if(days > -1 && days < 1) {
        return 'Today'
    }

    if(Math.floor(days) === -2 ) {
        return 'Yesterday'
    }

    return date.toFormat('LLLL d');
}