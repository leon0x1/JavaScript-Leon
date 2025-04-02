'use strict';

//Type Conversion Tasks:

//Task #1:

let value = true;
console.log(typeof value); //Boolean

value = String(value);
console.log(typeof value); //String
console.log(value); //true

console.log('6' * '2'); //12
console.log('6' - '2'); //4

let str = '123';
console.log(typeof str); //string

let num = Number(str);
console.log(typeof num); //number
console.log(num); //123

let age = Number('asd');
console.log(age); //NaN

console.log(Number(' 123  ')); // 123
console.log(Number('123z')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('Hi!')); // true
console.log(Boolean('')); // false
console.log(Boolean('0')); //true
console.log(Boolean(' ')); //true
