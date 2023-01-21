'use strict'
const numberOfFilms = +prompt('Сколько вы посмотрели фильмов?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    private: true,
};

const a = prompt('Один из последних фильмов которые вы посмотрели?',''),
      b = prompt('На сколько оцените его?'),
      c = prompt('Один из последних фильмов которые вы посмотрели?',''),
      d = prompt('На сколько оцените его?');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);