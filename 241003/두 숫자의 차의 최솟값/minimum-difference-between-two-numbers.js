let [n, arr] = require('fs').readFileSync(0).toString().trim().split('\n')
arr = arr.split(' ').map(Number)

let difMin = Number.MAX_SAFE_INTEGER

for(let i = 0; i < arr.length-1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        let curDiff = Math.abs(arr[i] - arr[j])

        if(curDiff < difMin) {
            difMin = curDiff
        }
    }
}

console.log(difMin)