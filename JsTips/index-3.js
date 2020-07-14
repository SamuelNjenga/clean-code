console.log(typeof NaN);
console.log(typeof Number);

console.log('Array Operations');
let arr = new Array(10000).fill('x');
console.log(arr[0])
console.log(arr[1000])
arr = arr.map((item) => `${item}#`)
console.log(arr[0])

//Remove falsy values
const a = [0,1,false,"a","",3,null,undefined]
const mod = a.filter(Boolean)
console.log(mod)

var twit = {name : 'Samuel'}
var insta = twit;
twit.followers = twit = {count : 1409}

console.log(twit);
console.log(insta);

let n = 'hello'
typeof +n
console.log(typeof +n)
