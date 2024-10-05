function leapYear(year)
{
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

let year = Number(require('fs').readFileSync(0).toString().trim())
console.log(leapYear(year) ? 'true' : 'false')