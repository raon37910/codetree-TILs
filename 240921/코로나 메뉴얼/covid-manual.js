// 감기 증상이 있으면 Y, 없으면 N
// 체온에 따라 진료소 다르게 할 것
const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let [감기여부1, 체온1] = input[0].split(' ')
let [감기여부2, 체온2] = input[1].split(' ')
let [감기여부3, 체온3] = input[2].split(' ')

체온1 = Number(체온1)
체온2 = Number(체온2)
체온3 = Number(체온3)

// 세 사람이 모두 A 진료소로 가는 경우 
if((감기여부1 == 'Y' && 체온1 >= 37) && (감기여부2 == 'Y' && 체온2 >= 37) && (감기여부3 == 'Y' && 체온3 >= 37)) {
    console.log('E')
    // 첫번째 두번째 사람이 A 진료소로 가는 경우 
} else if((감기여부1 == 'Y' && 체온1 >= 37) && (감기여부2 == 'Y' && 체온2 >= 37)) { 
    console.log('E')
    // 첫번째 세번째 사람이 A 진료소로 가는 경우
} else if((감기여부1 == 'Y' && 체온1 >= 37) && (감기여부3 == 'Y' && 체온3 >= 37)) { 
    console.log('E')
    // 두번째 세번째 사람이 A 진료소로 가는 경우 
} else if((감기여부2 == 'Y' && 체온2 >= 37) && (감기여부3 == 'Y' && 체온3 >= 37)) { 
    console.log('E')
} else {
    console.log('N')
}