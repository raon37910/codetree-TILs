class Person {
    constructor(name, postCode, place) {
        this.name = name
        this.postCode = postCode
        this.place = place
    }
}

let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let persons = []

for(let i = 1; i <= n; i++) {
    let [name, code, place] = inputs[i].trim().split(' ')
    let person = new Person(name, code, place)
    persons.push(person)
}

let minName = persons[0].name
let minPostCode = persons[0].postCode
let minPlace = persons[0].place

for(let i = 1; i < persons.length; i++) {
    if(persons[i].name > minName) {
        minName = persons[i].name
        minPostCode = persons[i].postCode
        minPlace = persons[i].place
    }
}

console.log(`name ${minName}`)
console.log(`addr ${minPostCode}`)
console.log(`city ${minPlace}`)