class User {
    constructor(code, score) {
        this.code = code
        this.score = score
    }
}

let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let users = []

for(let input of inputs) {
    let [code, score] = input.trim().split(' ')
    score = Number(score)
    users.push(new User(code, score))
}

let minScore = Number.MAX_SAFE_INTEGER
let minCode = ''

for(let user of users) {
    if(user.score < minScore) {
        minScore = user.score
        minCode = user.code
    }
}


console.log(`${minCode} ${minScore}`)