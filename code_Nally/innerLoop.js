for (let line = 1; line <= 5; line++){
    str = ''
    for(let numInLine = 1; numInLine <= line; numInLine++){
        str += numInLine
    }
    console.log(str)
}
/*
1
12
123
1234
12345*/

for(let i= 5; i <= 1; i--){  // отвечает за количество строк
    st = ''
     for(j= i; j < 1; j--){ //отвечает за наполнение строки
        st = st + j
    }
    console.log(st)
}