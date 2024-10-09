class User {
    constructor(id = 'codetree', level=10) {
        this.id = id
        this.level = level
    }
}

let [id, lv] = require('fs').readFileSync(0).toString().trim().split(' ')
let u1 = new User()
let u2 = new User(id, lv)

let users = [u1, u2]

for(let u of users) {
    console.log(`user ${u.id} lv ${u.level}`)
}