// if (1) {
//     i = 10
// }
// ​
// ​
// myFunction();
// function myFunction () {
//     console.log("Hello World")
// }
// console.log(i);
// ​
// ​
// // Ако може нешто да се стави во константа, го ставаме во константа!
// ​
// ​
// /* const a = 2; //грешка
// a = 2 + 3; //грешка */
// ​
// ​
// const arr = [1, 2, 3];
// /* arr = [5, 6, 7]; //грешка */
// arr.push(2);  //точно
// console.log(arr);  //точно
// ​
// ​
// function outerFunction () {
//     let i = 3;
//     function innerFunction () {
//         console.log(i)
//     }
// ​
//     innerFunction();
// }
// outerFunction();
// innerFunction();
// ​
// let res = outerFunction();
// res(); // Точно
// ​
// ​
// for (const i = 0; i < 10; i++) {
//     console.log(i);
// } // Грешка
// ​
// ​
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// } // Точно
// ​
// ​
// let i = 5;
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i); // Точно
// ​
// ​
// let i = 5;
// for (; i < 10;) {
//     console.log(i);
//     i++
// }
// console.log(i);
// ​
// ​
// ​
// // arrow functions
// ​
// const squareN = a => a * a;
// const squareN1 = () => a * a;
// const squareN2 = (a, b) => a * b;
// const squareN3 = (a, b) => {
//     // aaaaa
//     console.log('hello');
// }
// console.log(squareN(3));
// ​
// const multiply = (a, b) => a * b;
// console.log(multiply(2, 3));
// ​
// const transformToObj = (a, b) => ({
//         a: a,
//         b: b
// })
// ​
// const returnArray = (a, b) => {
//     return [a, b]
// }
// ​
// const returnArray = (a, b) => [a, b];
// ​
// const fnThis = () => {
//     console.log(this);
// }
// ​
// (function dummy () {
//     console.log('hey')
// }) ();
// ​
// ​
// // Ако не се користи во метод, ја декларираме во променлива, или ја повикуваме анонимно.
// ​
// /* Arrow function expressions (MDN)
// ​
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions 

// */
// ​
// ​
// // template literals
// ​
// const csvString = 'hello\nworld';
// const csvString1 = `hello
// world
// Vancho
// Car`;
// ​
// console.log(csvString);
// console.log(csvString1);
// ​
// const  name = 'Vancho Car';
// const csvStringFn1 = `Hello ${name}`;
// console.log(csvString2);
// ​
// const csvStringFn2 = `Hello ${(() => 'Vancho Tzar')}`;
// ​
// const printVancho = () => 'Vancho Tzar';
// const csvStringFn2 = `Hello ${printVancho()}`;
// ​
// ​
// // Default Parameters
// ​
// function riddle(a = 0) {
//     console.log(a);
// }
// ​
// riddle(5);
// riddle();
// ​
// function riddle2(a = 0, b = 3) {
//     console.log(a, b);
// }
// ​
// riddle(5);
// riddle();
// riddle(2, 6);
// ​
// ​
// // Destruction and spred operator
// ​
// function myFunction ()
// ​
// const numbers = [1, 2, 3];
// console.log(Math.max.apply(null, numbers));
// console.log(Math.max.apply(null, 1, 2, 3));
// ​
// Math.max(1, 2, 3);
// console.log(
//     Math.max(...numbers)
// );
// ​
// function myFunction (...input) {
//     console.log(input);
// }
// multiArgs(1);
// multiArgs(1, 3);
// multiArgs();
// ​
// ​
// // Elvis operator
// ​
// const a = 0;
// const b = a ?? 1;
// var a = b || csvString;
// ​
// const multiArg1 = (...input) => console.log(input) // Враќа undefined
// ​
// ​
// // Array distruction
// ​
// const arr = [1, 2, 3, 4, 5];
// const [ first, second, ...arrRest ] = arr; // Spread operator-от е секогаш на крај
// const [ first, second ] = arr;
// const [ first, , second ] = arr;
// ​
// const newArr = ['some', ...arrRest, 'other'];
// const [ firstEl, , thirdEl ] = arr
// ​
// let swapA = 2;
// let swapB = 3;
// [ swapA, swapB ] = [ swapB, swapA ];
// ​
// ​
// // --> deafault values
// ​
// const [ el1, el2, el3 = 3, el4 ] = [1, 2];
// console.log(el1, el2, el3);
// ​
// ​
// // --> parameter matvhing in unctions
// ​
// function isTriangle ([x1, y1 = 0], p2, p3) {
//     // statements
// }



// function uniqueArray (arr) {

//     return [...new Set (arr)]
// }

function uniqueArray (arr) {
    return arr.reduce(function(acc, curr) {
        return acc.includes(curr) ? acc : [...acc, curr]
     }, [])
 
 }
 
 console.log(uniqueArray([]))
 console.log(uniqueArray([1, 2, 3]))
 console.log(uniqueArray([1, 2, 2, 3, 4, 5, 5, 6]))
 console.log(uniqueArray([]))