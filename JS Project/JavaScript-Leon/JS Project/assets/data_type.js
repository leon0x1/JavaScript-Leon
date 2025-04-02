'use strict';

//Data types tasks:

//Task #1:

//Before change:
let str1 = 'xxx';
let str2 = 'yyy';
let txt = 'aaa' + str1 + ' bbb ' + str2 + ' ccc';

//After change:
txt = `aaa ${str1} bbb ${str2} ccc`;
console.log(txt);


//Task #2:
/*
let userAge = prompt('Enter your age:');
alert(`Your age is: ${userAge}`);
*/

//Task #3:

let product = {
  id: 12,
  name: 'car',
  description: 'red sport car',
  price: 3999.9,
  manufacturer: 'Toyota',
};

console.log(product);
product.category = 'Sport';
product.price = 3499.9;
delete product.description;

console.log(product);
