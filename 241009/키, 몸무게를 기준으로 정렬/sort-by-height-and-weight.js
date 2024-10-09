class Students {
    constructor(name, tall, weight) {
        this.name = name
        this.tall = tall
        this.weight = weight
    }
}

let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let students = []

for(let i = 1; i <= n; i++) {
    let [name, tall, weight] = inputs[i].trim().split(' ')
    tall = Number(tall)
    weight = Number(weight)

    students.push(new Students(name, tall, weight))
}

students.sort((a, b) => {
    if(a.tall !== b.tall) return a.tall - b.tall
    return b.weight - a.weight
})

for(let s of students) {
    console.log(`${s.name} ${s.tall} ${s.weight}`)
}