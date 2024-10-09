class Person {
    constructor(name, tall, weight) {
        this.name = name
        this.tall = tall
        this.weight = weight
    }
}

let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let persons = []

for(let i = 1; i <= n; i++) {
    let [name, tall, weight] = inputs[i].trim().split(' ')
    tall = Number(tall)
    weight = Number(weight)
    persons.push(new Person(name, tall, weight))
}

persons.sort((a, b) => a.tall - b.tall)

for(let p of persons) {
    console.log(`${p.name} ${p.tall} ${p.weight}`)
}