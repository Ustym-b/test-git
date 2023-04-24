'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?','');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let movieFirst = prompt('Один з останіх переглянутих фільмів?',''),
	movieFirstBal = prompt('Яку оцінку йому двсте?',''),
	movieTwo = prompt('Один з останіх переглянутих фільмів?',''),
	movieTwoBal = prompt('Яку оцінку йому двсте?','');

personalMovieDB.movies[movieFirst] = movieFirstBal;
personalMovieDB.movies[movieTwo] = movieTwoBal;

console.log(personalMovieDB);
