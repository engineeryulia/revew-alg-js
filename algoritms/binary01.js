const array = [1, 4, 5, 6, 7, 10]
let count = 0;
function lineSearch(array, item){
    for(let i = 0; i < array.length; i++){
    count += 1;
        if (array[i] === item){
        return i;
        }
    }
    return null
}

console.log(lineSearch(array, 7))
console.log('count= ', count )