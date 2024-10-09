class Secret {
    constructor(code, place, time) {
        this.code = code
        this.place = place
        this.time = time
    }
}

let [code, place, time] = require('fs').readFileSync(0).toString().trim().split(' ')
let ans = new Secret(code, place, time)

console.log(`secret code : ${ans.code}`)
console.log(`meeting point : ${ans.place}`)
console.log(`time : ${ans.time}`)