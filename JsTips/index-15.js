// Declaring and assigning variables from object properties.
const foo = {
    x:'sammy',
    y:'lydia'
}

const a = foo.x, b = foo.y; // Wrong
console.log(a);
console.log(b);

const { ['x']: k, ['y']: l } = foo; // Right
console.log(k);
console.log(l);
