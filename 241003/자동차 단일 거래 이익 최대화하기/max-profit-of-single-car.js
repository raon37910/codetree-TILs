let [n, arr] = require('fs').readFileSync(0).toString().split('\n')
arr = arr.split(' ').map(Number)

let difMax = 0

for(let i = 0; i < arr.length-1; i++) {
    let curCost = arr[i]
    for(let j = i + 1; j < arr.length; j++) {
        let curDif = arr[j] - curCost
        if(curDif > difMax) {
            difMax = curDif
        }
    }
}

console.log(difMax)