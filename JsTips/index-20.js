 // Assigning the same thing to multiple variables.
let d = 900;
a = d;
b = d;
c = d; // Wrong
console.log(c);

a = b = c = d;
console.log(c);