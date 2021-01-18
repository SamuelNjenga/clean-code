// Assigning a value to the same thing conditionally using ternary operators
let a = 90;
let b = 87;
a > b ? foo = 'apple' : foo = 'ball'; // Wrong 
console.log(foo);

foo = a > b ? 'apple' : 'ball'; // Right
console.log(foo);