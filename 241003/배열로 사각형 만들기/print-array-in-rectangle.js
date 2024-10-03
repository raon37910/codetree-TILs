let arr = Array(5).fill(0).map(_ => Array(5).fill(1))

for(let i = 1; i < 5; i++) {
    for(let j = 1; j < 5; j++) {
        arr[i][j] = arr[i-1][j] + arr[i][j-1]
    }
}

for(let i = 0; i < 5; i++) {
    let result = ''
    for(let j = 0; j < 5; j++) {
        result += `${arr[i][j]} `
    }
    console.log(result)
}