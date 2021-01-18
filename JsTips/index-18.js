// Passing parameters conditionally.
// let foo = 'Orange'
let foo = null
let kip = 'Lemon'
if(!foo){
    foo = 'apple';
}

const bar = (a,b) => {
    console.log(a, b); // Wrong
}
bar(foo, kip);

bar(foo || 'apple', kip); // Right