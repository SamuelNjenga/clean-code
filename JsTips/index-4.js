const a = Number.isInteger(-100000);
const b = Number.isInteger(2.000000000000001);
const c = Number.isInteger(2.0000000000000001);
const d = Number.isInteger(10);

console.log(a + b + c + d);
console.log(d - b);
console.log(b);
console.log(c);


