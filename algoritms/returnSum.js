let arr = [2, 1, 5, 2]
let total = 0;
function sum (par){
    for (let i=0; i< par.length; i++){
        total+= par[i]
    }
    return total;
}

console.log(sum(arr))
