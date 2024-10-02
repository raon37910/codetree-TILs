// 1 a => a번째 원소 출력
// 2 b => 값이 b인 원소의 인덱스(가장 작은거) 없으면 0 출력
// 3 s e s번째 원소부터 e번째 원소까지의 각원 소의 값을 공백으로 구분하여 출력
let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let [n, q] = inputs[0].split(' ').map(Number)
let arr = inputs[1].split(' ').map(Number)
let queries = inputs.slice(2)

for(let query of queries) {
    let command = query.split(' ')[0]
    command = Number(command)
    // console.log(`command: ${command}`, query)
    if(command === 1) {
        let[_, value] = query.split(' ')
        console.log(arr[value -1])
    } else if (command === 2) {
        let index = -1
        let[_, value] = query.split(' ')
        value = Number(value)
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === value) {
                index = i
                break
            }
        }
        console.log(index === -1 ? 0 : index + 1)
    } else {
        let [_, start, end] = query.split(' ').map(x => +x)
        console.log(arr.slice(start-1, end).join(' '))
    }
}