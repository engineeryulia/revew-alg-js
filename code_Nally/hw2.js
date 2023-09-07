/*1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.
1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.

1.3 Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):
«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»
*/
 let myMonth = 'July'
 myMonth = myMonth.toLowerCase()

if(myMonth == 'July' || myMonth == 'august'){
 console.log('approved')
}else console.log('denied')


let num1 = 5;
let num2 = 3;
let operator = '/'
if(operator == '+'){
 console.log(num1 + num2)
}
else if(operator == '-'){
 console.log(num1 - num2)
}
else if(operator == '*'){
 console.log(num1 * num2)
}
else if(operator == '/'){
 console.log(num1 / num2)
}
else console.log("Please, enter the correct numbers")


let dayDistance = 3;
let nightDown = -2;
let days = 0;
let wall = 5;

if((dayDistance += dayDistance) <= wall){
 day++
 console.log(`Current distance t the end of the day for day ${days} is `)
}