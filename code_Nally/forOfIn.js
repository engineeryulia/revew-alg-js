const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
    console.log(x)
    //BMW
    //Volvo
    // Mini
//заложен по дефолту под индексовые значения  (стринг, массив) VALUE for (let el of cars)  el
}
for (let x in cars) {
    console.log(x)
}
//0
//1
//2
//выводит индексы ....Если хочу вывести сами элементы
// INDEX  for(let el of cars) cars[index] /key in object
for (let x in cars) {
    console.log(cars[x])
}
//BMW
//Volvo
// Mini