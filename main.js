'use strict';

let numberOfFilms;

function srart() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//Проверяем неправдивые ответы пользователя
//Пока пользователь вводит пустую строку || пользователь нажимает отменить 'null' || Пользователь пытается ввести не число
//И если одно из этих аргументов будет правдой, то скрипт будет повторять запрашивать нужный ответ пользователя
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

srart();


//Главный обьект
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Функция которая спрашивает у пользователя какие фильмы он смотрел
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


// Функция которая определяет уровень пользователя
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

//Функция которая выводит в консоль главный  
//****Свойство hidden является Boolean типом данных , который принимает значение true 
//В аргумент мы задает свойство hidden, и проверяет его через условие if на то что бы hidden не равнялся на true тоесть !hidden - false
//Если значение == false мы вызываем функцию которая будет проверять свойство privat. Если стоит в позиции
//false - выводит в консоль главный объект программы 
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.privat);

//Функция которая спрашивает у пользователя любые жанры, и записыпает их в главный обьект, в массив "genres" и нумерует их
function writeYourGenres () {
    //Цикл начинаем с 1, потому что нужно записанные по порядку
    //А пользователю все равно что данные в масиве начинаются с нуля
    for(let i = 1; i <= 3; i++) {
        //Задаем пользователю вопрос
        //Передаем значение i в promt
        //И записываем то что задал пользователь в базу данных, в массив 'genres'
        //дальше мы указываем индекс 
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
    }
}

writeYourGenres();
