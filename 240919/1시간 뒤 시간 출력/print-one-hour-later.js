let [h,m]=require('fs').readFileSync(0).toString().split(':').map(x => +x)
console.log(`${h+1}:${m}`)