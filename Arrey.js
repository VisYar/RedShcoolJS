let arrey = [];
const arrey1 = [1, 2, 3];
console.log(arrey1);
console.log(arrey1.length);
const arr = new Array(10, null, false, 5, 6, 7);
console.log(arr);
console.log(arr.length);
arr.length = 3
console.log(arr.length);
console.log(arr);
arr.length = 0;
console.log(arr);
const arr2 = new Array(10, 11, null, false, 5, 6, 7);
console.log(arr2[1]);
console.log(arr2[arr2.length - 1]);
console.log(arr2.at(-1));

//pop push
arr2.push('string', 100, 'dfghr')
console.log(arr2);
console.log(arr2.length);
arr2.pop();
console.log(arr2);
console.log(arr2.length);

// //shift unshift

// arr2.unshift("A");
// console.log(arr2);
// console.log(arr.length);
// arr2.shift();
// console.log(arr2);
// console.log(arr2.shift());

// let arr = [1, 2, 3, 4]
// arr.reverse();
// console.log(arr);

//let arr = new Array(10);
// let arr1 = new Array(10); // создание массива из 10 элементов
// let arr = new Array(10, 5, 'dddd', null, 4);
// console.log(arr1);
// console.log(arr);
//arr.length = 0; // обнулить массив
// console.log(arr[2]);
// console.log(arr[arr.length - 1]); // вместо этогоможно использовать метод at
// console.log(arr.at(-1));

// let arr = new Array(10, 5, 'dddd', null, 4,);
// let arr1 = new Array(1, 50, 'sss', 4,);
// let arrStr = ['hhhh', 'yyyy',];
// let newArr = arrStr.concat(arr, arr1);
// console.log(newArr);

// arr1.reverse();
// console.log(arr1);

// let str = "Hello World";
// const arr = str.split('l');
//const arr = str.split('l');
// console.log(arr);
// let nweStr = arr.join();
// console.log(nweStr);

// let str = "Hello World";
// const arr = str.split('');
// console.log(arr);
// const newArr = arr.slice(2, 4);
// console.log(newArr);
// const newArr = arr.slice(-5);
// console.log(newArr);
//создать копию массива
// const newArr = arr.slice();
// console.log(newArr);
// const arr1 = [1, 2, 3, 7];
// console.log(arr1);
// arr1.splice(3, 0, 4, 5, 6,);
// console.log(arr1);

// const arr = "Hello World".split('');
// console.log(arr);
// let i = arr.indexOf('l');
// while (i != -1) {
// 	console.log(i);
// 	i = arr.indexOf('l', i + 1)
// }

// const arr = "Hello World".split('');
// console.log(arr.includes("l"));

// const arr = [2, 3, 6, 8, 10, 12];
// console.log(arr.find(x => x % 2 != 0));
// const arr1 = [2, 3, 6, 8, 10, 12];
// console.log(arr1.findIndex(x => x % 2 != 0));
// const arr2 = [2, 3, 6, 8, 10, 12];
// console.log(arr2.find((x, i) => i % 2 != 0 && x % 2 != 0));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// const newArr = arr.filter(element => element % 2 != 0);
// console.log(newArr);
// const arr1 = [1, true, 3, null, 5, 6, NaN, 8, 'str',];
// const newArr1 = arr1.filter(element => typeof element == 'number');
// console.log(newArr1);

// const arr = [1, 2, 3, -4, 5, 0, 7, 8, 9,];
// console.log(arr.every(el => el > 0));
// console.log(arr.some(el => el > 0));

//const arr = [-1, -2, -3, -4, -5, -7, -8, -9,];
// const chengeSign = function (el) {
// 	console.log(-el);
// }
// chengeSign(arr[0]);
// arr.forEach(function (el) {
// 	console.log(-el);
// });
// const chengeSign1 = (el => console.log(-el));
//arr.forEach((el, ind) => ind % 2 == 0 ? console.log(-el) : '');
// arr.forEach(el => console.log(el ** 3));
// arr.forEach((el, i, arr) => i % 2 != 0 ? console.log((el ** 2) + arr.length) : console.log(' '));

// const arr = ['Don', 'Anna', 'Serg', 'Od'];
// const arr1 = [1, 100, 3, 88, 30];
// console.log(arr.sort());
// console.log(arr.sort().reverse());
// console.log(arr1.sort());
// console.log(arr1.sort((a, b) => a - b));
// console.log(arr1.sort((a, b) => b - a) [0]);

// const arr = ['Dooooooooon', 'Annnnna', 'Serg', 'Od'];
// console.log(arr.map(el => el.length));
// console.log(arr.map((el, i, arr) => i == 0 || i == (arr.length -1) ? `**${el}**` : el));

// const arr = [1, 2, 3, -4, 5, 0, 7, 8, 9,];
// const result = arr.reduce((acc, item) => acc + item, 0);
// console.log(result);

// const arr = Array.from("JavaScript"); // со строками
// console.log(arr);

// const arr1 = Array.from(Array(20).fill(1));
// console.log(arr1);

// const arr2 = Array.from(Array(20).keys());
// console.log(arr2);

// let start = 10;
// let finish = 25;
// const arr3 = Array.from(Array(finish - start + 1).fill(start), (el, i) => el + i);
// console.log(arr3);

// const arr4 = Array.from(Array(finish - start + 1).fill(start).map((el, i) => el + i));
// console.log(arr4);

// console.log([...Array(11).keys()]);

// const arr = Array.of(1, 15, -2, NaN, 'Anna', true);
// console.log(arr);
// console.log(Array.isArray(arr));
