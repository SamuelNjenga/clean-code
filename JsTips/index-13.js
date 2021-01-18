// Assigning the same value to a specific object property conditionally
let c = 89;
let d = 110;
let a = {
    foo:'',
    bar:''
}
c > d ? a.foo = 'apple' : a.bar = 'apple'; // Wrong
console.log(a);

a = { [c > d ? 'foo' : 'bar']: 'apple' }; // Right
console.log(a);