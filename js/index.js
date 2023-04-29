'use strict';

let numberOfFilms;

function start(){
	numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?','');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?','');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms(){
	for(let i = 0; i < 2; i++){
		let a = prompt('Один з останіх переглянутих фільмів?',''),
			b = prompt('Яку оцінку йому дасте?','');
		if(a === '' || b === '' || a === null || b === null || a.length >= 50 ||b.length >= 50){
			console.log('error');
			i--;
			
		} else {
			console.log('done');
			personalMovieDB.movies[a] = b;
		}
	}
}

// rememberMyFilms();

function detectPersonalLevel(){
	if(personalMovieDB.count < 10){
		alert('Переглянуто доволі мало фільмів');
	} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
		alert('Ви класичний глядач');
	} else if(personalMovieDB.count >= 30){
		alert('Ви кіноман');
	} else{
		alert('Сталася помилка');
	}
}

detectPersonalLevel();

function writeYourGenres(){
	for(let i = 0; i < 3; i++){
		personalMovieDB.genres[i] = prompt(`Який ваш улюблений жанр під номером ${i+1}?`);
	}
}

writeYourGenres();

function showMyDB(hidden){
	if (!hidden){
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++){
// 	for(let j = 0; j < lines - i; j++){
// 		result+= ' ';
// 	}
// 	for(let j = 0; j < 2*i+1; j++){
// 		result+= '*';
// 	}
// 	result += '\n';
// }
// console.log(result);


// function getMathResult(basicNum, basicProgres) {
// 	let str = '';

// 	if(typeof(basicProgres) === 'number' && basicProgres > 0){


// 		for(let i = 1; i<= basicProgres; i++){
// 			if(i == basicProgres){
// 				str+= `${basicNum * i}`;
// 			} else {
// 				str+= `${basicNum * i} --- `;
// 			}

// 		}
		
// 		console.log('Done');
// 		return str;
// 	} else {
// 		return basicNum;
// 	}
// }

// console.log(getMathResult(5, 2)); 

