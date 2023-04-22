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
// alert('hello');

// const result = confirm('A . [th&');
// console.log(result);

// const answer = +prompt('ваМ Є 18', '18');
// console.log(typeof(answer) );

// const answers = [];

// answers[0] = prompt('What is your name?','');
// answers[1] = prompt('What is your searname?','');
// answers[2] = prompt('Age?','');

// console.log(typeof(answers));
// console.log(typeof(null));

// const user = 'Ustym';

// console.log(`Доброго вечора ${user}`);
// let incr = 10, decr = 10;

// ++incr;
// --decr;

// console.log(incr);
// console.log(decr);

// const isChec = false,
// 	isClose = false;

// console.log(isChec && isClose);