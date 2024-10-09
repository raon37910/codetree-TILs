class Bomb {
    constructor(code, color, time) {
        this.code = code
        this.color = color
        this.time = time
    }
}

let [code, color, time] = require('fs').readFileSync(0).toString().trim().split(' ')
const bomb = new Bomb(code, color, time)

console.log(`code : ${bomb.code}`)
console.log(`color : ${bomb.color}`)
console.log(`second : ${bomb.time}`)