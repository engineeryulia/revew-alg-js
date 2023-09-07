// const arrB = [1, 2, 3, 4, 5]
// arrB.length = 2;
// console.log(arrB)//[ 1, 2 ]
// arrB.length = 0
// console.log(arrB)//[]
//
// const arrNumbers =[1, 2, 3, -5, 10]
// let sum = 0;
// for (let i = 0; i < arrNumbers.length; i++) {
//     sum += arrNumbers[i]
// }
// console.log(sum)//11

const arrayStr = ["Apple", "Water", "School", "Ocean"]
let strResult = ''
let wordsLength = 5
for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i].length == wordsLength) {
        strResult += `${arrayStr[i]} `
    }
}
console.log(strResult)  // "Apple Water Ocean"

const number1 = [0, 2, 5]
const number2 = [0, 2, 5]

let flag = true;
for (let i = 0; i < number1; i++){
    if(number1[i] != number2[i]){
        flag = false
        console.log('number != number2')
        break
    }

    }
if(flag == true) {
    console.log('number1 = number2')
}

