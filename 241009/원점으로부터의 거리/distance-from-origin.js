class Point {
    constructor(index, x, y) {
        this.index = index
        this.x = x
        this.y = y
    }
}

let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let points = []

for(let i = 1; i <= n; i++) {
    let [x, y] = inputs[i].trim().split(' ')
    points.push(new Point(i, x, y))
}

points.sort((a, b) => {
    let sumA = Math.abs(a.x) + Math.abs(a.y)
    let sumB = Math.abs(b.x) + Math.abs(b.y)

    if(sumA !== sumB) return sumA - sumB
    return a.index - b.index
})

for(let p of points) {
    console.log(p.index)
}