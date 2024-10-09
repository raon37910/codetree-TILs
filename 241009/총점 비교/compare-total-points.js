class Student {
    constructor(name, score1, score2, score3) {
        this.name = name
        this.score1 = score1
        this.score2 = score2 
        this.score3 = score3
        this.sum = this.score1 + this.score2 + this.score3
    }
}

let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let students = []

for(let i = 1; i <= n; i++) {
    let [name, score1, score2, score3] = inputs[i].trim().split(' ')
    score1 = Number(score1)
    score2 = Number(score2)
    score3 = Number(score3)
    students.push(new Student(name, score1, score2, score3))
}

students.sort((a, b) => a.sum - b.sum)

for(let s of students) {
    console.log(`${s.name} ${s.score1} ${s.score2} ${s.score3}`)
}