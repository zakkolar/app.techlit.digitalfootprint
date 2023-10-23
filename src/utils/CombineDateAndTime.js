export const CombineDateAndTime = (date, time, dayOffset = 0) => {
    const timeFormat = /(\d{1,2}):(\d\d) (AM|PM)/igm
            let [string, hours, minutes, period] = timeFormat.exec(time);
            hours = parseInt(hours);
            minutes = parseInt(minutes);
            if(period.toLowerCase() === 'pm') {
                hours += 12;
            }
            return date.set({hours, minutes}).plus({days: dayOffset});
}