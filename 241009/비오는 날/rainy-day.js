class Whether {
    constructor(date, day, weather) {
        this.date = date
        this.day = day
        this.weather = weather
    }
}

let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let arr = []

for(let i = 1; i <= n; i++) {
    let [date, day, weather] = inputs[i].trim().split(' ')
    if(weather === 'Rain') {
        arr.push(new Whether(date, day, weather))
    }
}

let minWether = arr[0]

for(let i = 1; i < arr.length; i++) {
    if(minWether.date > arr[i].date) {
        minWether = arr[i]
    }
}

console.log(`${minWether.date} ${minWether.day} ${minWether.weather}`)