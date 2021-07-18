const {getLength, getFirst, getLast} = require('./statistics');
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const arr =[]; 

console.log(getLength(fruits));
console.log(getFirst(fruits));
console.log(getLast(fruits));
console.log(getFirst(arr));
console.log(getLast(arr));