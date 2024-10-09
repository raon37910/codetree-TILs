class Student {
    constructor(name, tall, weight) {
        this.name = name
        this.tall = tall
        this.weight = weight
    }
}

let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let students = []

for(let input of inputs) {
    let [name, tall, weight] = input.trim().split(' ')
    tall = Number(tall)
    weight = Number(weight)
    students.push(new Student(name, tall, weight))
}

console.log('name')
students.sort((a, b) => {
    if(a.name < b.name) return -1
    else return 1
})

for(let s of students) {
    console.log(`${s.name} ${s.tall} ${s.weight.toFixed(1)}`)
}

console.log('\nheight')
students.sort((a, b) => b.tall -a.tall)

for(let s of students) {
    console.log(`${s.name} ${s.tall} ${s.weight.toFixed(1)}`)
}