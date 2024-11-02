
function formatPlural(unit, val){
    return `${val} ${unit}${val > 1 ? 's' : ''}`;
} 

function formatResult(years, days, hours, minutes, seconds){
    let result = [];
    if(years) result.push(formatPlural('year', years));
    if(days) result.push(formatPlural('day', days));
    if(hours) result.push(formatPlural('hour', hours));
    if(minutes) result.push(formatPlural('minute', minutes));
    if(seconds) result.push(formatPlural('second', seconds));

    if( result.length === 1) return result[0];

    let last = result.pop();
    return `${result.join(', ')} and ${last}`;
}

module.exports = function formatDuration(seconds) {
    const yearDays = 365;
    const dayHours = 24;
  
    if (seconds <= 0) {
        return 'now';
    }

    let result = '';
    let years = Math.floor(seconds / (yearDays * dayHours * 3600));
    let days = Math.floor((seconds % (yearDays * dayHours * 3600)) / (dayHours * 3600));
    let hours = Math.floor((seconds % (dayHours * 3600)) / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    
    return formatResult(years, days, hours, minutes, secs);

}
