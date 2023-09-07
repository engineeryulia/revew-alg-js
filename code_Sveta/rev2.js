let vegi = ['cabbage', 'Carrot', 'Onion', 'Potato'];
//вывести строки одержащие буквы 'а' и 'о' слова не должны повторяться
for(let i = 0; i < vegi.length; i++){
    for(let j = 0; j < vegi[i].length; j++){
        if(vegi[i][j] == 'a' || vegi [i][j] == 'o'){
            console.log(vegi[i])
            break
        }
    }
}