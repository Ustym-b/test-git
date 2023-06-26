'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: () => {
		personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?','');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
			personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?','');
		}
	},
	rememberMyFilms: () => {
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
	},
	detectPersonalLevel: () => {
		if(personalMovieDB.count < 10){
			console.log('Переглянуто доволі мало фільмів');
		} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
			console.log('Ви класичний глядач');
		} else if(personalMovieDB.count >= 30){
			console.log('Ви кіноман');
		} else{
			console.log('Сталася помилка');
		}
	},
	writeYourGenres: () => {
		for(let i = 0; i < 3; i++){
			let genr = prompt(`Який ваш улюблений жанр під номером ${i+1}?`);
			if (genr === null || genr === ''){
				i--;
			}else {
				personalMovieDB.genres[i] = genr;
			}
			
			personalMovieDB.genres.forEach((element, i)=> {
				console.log(`Олюблений жанр ${i+1} - це ${element}`);
			});
		}
	},
	toggleVisibleMyDB: () => {
		if(personalMovieDB.privat){
			personalMovieDB.privat = false;
		} else { 
			personalMovieDB.privat = true;
		} 
	},
	showMyDB: (hidden) => {
		if (!hidden){
			console.log(personalMovieDB);
		}
	}
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

personalMovieDB.showMyDB(personalMovieDB.privat);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// function calculateVolumeAndArea(num) {
// 	if (Number.isInteger(num) && num > 0){
// 		return `Объем куба: ${num*num*num}, площадь всей поверхности: ${num*num*6}`;
// 	} else {
// 		return 'При вычислении произошла ошибка';
// 	}
// }

// console.log(calculateVolumeAndArea(15));

// function getCoupeNumber(num) {
// 	if (num === 0 && num > 36){
// 		return 'Таких мест в вагоне не существует';
// 	} 
	
// 	if (!Number.isInteger(num) && num < 0){
// 		return 'Ошибка. Проверьте правильность введенного номера места';
// 	}

// 	return Math.ceil(num/4);
// }

// console.log(getCoupeNumber(22));

// // Место для первой задачи
// function getTimeFromMinutes(time) {
// 	let hour = Math.floor(time/60);
// 	const minutes = time%60;

// 	if (!Number.isInteger(time) || time < 0){
// 		return 'Ошибка, проверьте данные';
// 	}
// 	if (hour === 1){
// 		return `Это ${hour} час и ${minutes} минут`;
// 	} else if (hour > 1 && hour < 5){
// 		return `Это ${hour} часа и ${minutes} минут`;
// 	} 
// 	return `Это ${hour} часов и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(500));

// function findMaxNumber(num1, num2, num3, num4) {
// 	if(typeof(num1) !== 'number' || typeof(num2) !== 'number' ||
// 	typeof(num3) !== 'number' || typeof(num4) !== 'number'){
// 		return 0;
// 	}
// 	return Math.max(num1, num2, num3, num4);
// }

// console.log(findMaxNumber(1, 5, 11.3));

// function fib(num) {
// 	if(!Number.isInteger(num) || num <= 0){
// 		return '';
// 	}

// 	let str = '';
// 	let a = 0;
// 	let b = 1;

// 	for(let i = 0; i < num; i++){
// 		if (i + 1 === num){
// 			str+= `${a}`;
// 		} else {
// 			str += `${a} `;
// 		}
// 		let c = a + b;
// 		a = b;
// 		b = c;
// 	}
// 	return str;
// }

// console.log(fib(10));

// const str = prompt('','');
// const prod = str.split(', ');
// console.log(prod);
// .........................................................................................
// const arr = [1, 3, 8, 15, 22, 47, 99];

// function searchNum(array, item){
// 	let low = 0;
// 	let high = array.length - 1;

// 	while (low <= high){
// 		let mid = (low + high)/2;
// 		let value = array[mid];

// 		if (value == item){
// 			return mid;
// 		} 

// 		if (item > value){
// 			low = mid + 1;
// 		}
// 		else {
// 			high = mid - 1;
// 		}
// 	}
	
// 	return 'В масиві такого числа немає;';
// }

// console.log(searchNum(arr,99));
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// const personalPlanPeter = {
// 	name: 'Peter',
// 	age: '29',
// 	skills: {
// 		languages: ['ru', 'eng'],
// 		programmingLangs: {
// 			js: '20%',
// 			php: '10%'
// 		},
// 		exp: '1 month'
// 	},
// 	showAgeAndLangs: function(plan){
// 		const {age} = plan;
// 		const {languages} = plan.skills;
// 		let lang = languages.join(' ');
// 		return `Мне ${age} и я владею языками: ${lang.toUpperCase()}`;
// 	}
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
// 	const {exp} = plan.skills;

// 	return exp; 
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
// 	let str = '';
// 	const {programmingLangs} = plan.skills;

// 	for (let key in programmingLangs){
// 		str+= `Язык ${key} изучен на ${programmingLangs[key]} \n`;
// 	}

// 	return str;
// }

// showProgrammingLangs(personalPlanPeter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
// 	let nameFamily = '';
// 	if (arr.length === 0){
// 		nameFamily += 'Семья пуста';
// 	}

// 	nameFamily += arr.join(' ');

// 	return nameFamily;
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
// 	arr.forEach( item => {
// 		console.log(item.toLowerCase());
// 	});
// }

// standardizeStrings(favoriteCities);
// const someString = 'This is some strange string';

// function reverse(str) {
// 	if(typeof(str) != 'string'){
// 		return console.log('Ошибка');
// 	}

// 	const array = str.split('').reverse().join('');

// 	console.log(array);
// 	return array;
// }

// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const OllCurrencies = [...baseCurrencies, ...additionalCurrencies];

// function availableCurr(arr, missingCurr) {
// 	let str = '';

// 	arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
	
// 	arr.forEach(element => {
// 		element === missingCurr ? str+= '' : str += `${element}\n`;	
// 	});

// 	return str;
// }

// console.log(availableCurr(OllCurrencies, 'RUB'));

// const shoppingMallData = {
// 	shops: [
// 		{
// 			width: 10,
// 			length: 5
// 		},
// 		{
// 			width: 15,
// 			length: 7
// 		},
// 		{
// 			width: 20,
// 			length: 5
// 		},
// 		{
// 			width: 8,
// 			length: 10
// 		}
// 	],
// 	height: 5,
// 	moneyPer1m3: 30,
// 	budget: 50000
// };

// function isBudgetEnough(data) {
// 	let square = 0,
// 		volume = 0;
	
// 	data.shops.forEach((item) => {
// 		square += item.width * item.length;
// 	});

// 	volume = square * data.height;

// 	if (data.budget < (volume * data.moneyPer1m3)){
// 		console.log('Бюджета недостаточно');
// 	} else {
// 		console.log('Бюджета достаточно');
// 	}
// }

// isBudgetEnough(shoppingMallData);
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

// function sortStudentsByGroups(arr) {
// 	const a = [],
// 		b = [],
// 		c = [],
// 		other = [];
	
// 	arr.sort().forEach( (item, i) => {
// 		if( i < 3){
// 			a.push(item);
// 		} else if(i >= 3 && i < 6){
// 			b.push(item);
// 		} else if (i >= 6 && i < 9){
// 			c.push(item);
// 		} else {
// 			other.push(item);
// 		}
// 	});
// 	return [a, b, c, `Оставшиеся студенты: ${other.length === 0 ? '-' : other.join(', ')}`];

// }

// console.log(sortStudentsByGroups(students));

// function foo(a,b) {
// 	const [,, sec] = a;
// 	const {eng} = b;
 
// 	return `${sec} ${eng}`;
// }
 
// const result = foo(['Hello', '[fqjd', 'Привет'], {ru: 'Мир', eng: 'World'});

// console.log(result);

// alert(typeof(+'Infinity'));
/////////////////////////////////////////
// const restorantData = {
// 	menu: [
// 		{
// 			name: 'Salad Caesar',
// 			price: '14$'
// 		},
// 		{
// 			name: 'Pizza Diavola',
// 			price: '9$'
// 		},
// 		{
// 			name: 'Beefsteak',
// 			price: '17$'
// 		},
// 		{
// 			name: 'Napoleon',
// 			price: '7$'
// 		}
// 	],
// 	waitors: [
// 		{
// 			name: 'Alice', 
// 			age: 22
// 		},
// 		{
// 			name: 'John', 
// 			age: 24
// 		}
// 	],
// 	averageLunchPrice: '20$',
// 	openNow: true
// };

// function isOpen(prop) {
// 	let answer = '';
// 	prop ? answer = 'Открыто' : answer = 'Закрыто';

// 	return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
// 	if ((parseInt(fDish.price) + parseInt(sDish.price)) < parseInt(average)) {
// 		return 'Цена ниже средней';
// 	} else {
// 		return 'Цена выше средней';
// 	}
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
// 	const copy = Object.assign({}, data);

// 	copy.waitors = [{name: 'Mike', age: 32}];
// 	return copy;
// }

// console.log(transferWaitors(restorantData));
// console.log(restorantData);

//////////////////////////////////////////////////////////////////////////

// Рекурсія

// function factorial(n) {
// 	if(Number.isInteger(n) && n > 0){
// 		if(n === 1){
// 			return n;
// 		} else{
// 			return n * factorial(n-1);
// 		}
// 	} else if(n <= 0){
// 		return 1;
// 	} else return 'Введіть коректні дані';
// }

// console.log(factorial(10));

/////this
// const obj = {
// 	a: 20,
// 	b: 20,
// 	sum: function(){
// 		console.log(this);
// 	}
// };
// obj.sum();

function count(number) {
	return this * number;
}
