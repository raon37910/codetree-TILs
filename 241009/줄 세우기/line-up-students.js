class Student {
    constructor(index, tall, weight) {
        this.index = index
        this.tall = tall
        this.weight = weight
    }
}

let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let students = [] 

for(let i = 1; i <= n; i++) {
    let [tall, weight] = inputs[i].trim().split(' ').map(Number)
    students.push(new Student(i, tall, weight))
}

students.sort((a, b) => {
    if(a.tall !== b.tall) return b.tall - a.tall
    if(a.weight !== b.weight) return b.weight - a.weight
    return a.index - b.index
})

for(let s of students) {
    console.log(`${s.tall} ${s.weight} ${s.index}`)
}