// Declaring and assigning variables from array indexes.
let foo = [12,33,44];
let a = foo[0], b = foo[1]; // Wrong
console.log(a);
console.log(b);


let [c, d] = foo; // Right
console.log(c);
console.log(d);