class Student {
    constructor(name, kor, eng, math) {
        this.name = name
        this.kor = kor
        this.eng = eng
        this.math = math
    }
}

let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let students = [] 

for(let i = 1; i <= n; i++) {
    let [name, kor, eng, math] = inputs[i].trim().split(' ')
    kor = Number(kor)
    eng = Number(eng)
    math = Number(math)
    students.push(new Student(name, kor, eng, math))
}

students.sort((a, b) => {
    if(a.kor === b.kor) {
        if(a.eng === b.eng) {
            return b.math - a.math
        } else {
            return b.eng - a.eng
        }
    } else {
        return b.kor - a.kor
    }
})

for(let s of students) {
    console.log(`${s.name} ${s.kor} ${s.eng} ${s.math}`)
}