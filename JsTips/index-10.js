//Shortest and fastest way to round down a number
const sampleNumber = 420.69;

const fastFloorNumber = ~~sampleNumber;
const slowFloorNumber = Math.floor(sampleNumber);

console.log(fastFloorNumber === slowFloorNumber);


function sayHello() {
    return function functionName() {
        return "Hello from Njenga"
    }
}

let fn = sayHello();
console.log(fn);
let message = fn();
console.log(message);

function foo(){
    let a = b = 0
    a++;
    return a;
}
foo();
console.log(typeof a);
console.log(typeof b);