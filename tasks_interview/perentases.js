/*Задача с интервью
У вас есть массив со скобками, предположим
[ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
Нужно выяснить, равно ли количество открывающих и закрывающих скобок одного типа. Последовательность не важна.

*/

let arr = [ '(', ')', '(', ')', ')',  ')', ')']
let count1 = 0;
let count2 = 0;

for(let i = 0; i < arr.length; i++){
    if (arr[i] === '('){
        count1 ++
    }
    else if(arr[i]=== ')'){
        count2 ++
    }
}
    if (count1 === count2) {
        console.log('set of brackets', count1, count2)
    }else{
        console.log('lack of brackets', count1, count2)

    }


/*Решите задачу с улиткой, используя for loop.* Поправка, отложите задачу до следующего урока. Там решение с другим цикломlet arrA = ['(', ')', ')', ')']

Креативное задание*(не показываем решение до понедельника):
Имеется зашифрованное предложение
“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор.


Задачка посложнее*
 Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему


*/

