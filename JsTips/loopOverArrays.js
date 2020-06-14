let index = 0;
const array = [1, 2, 3, 4, 5, 6];

// while (index < array.length) {
//     console.log(array[index]);
//     index++;
// }

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// array.forEach(i => console.log(i))

// array.map(item => (console.log(`${item * item}`)))

// const sum = array.reduce((total, amount) => total + amount)
// console.log(sum)

// const k = array.filter(i => i % 2 !== 0)
// console.log(k)

// const isEven = x => x % 1 == 0
// const value = array.every(isEven)
// console.log(value)

const isEven = x => x % 1 == 90
const value = array.some(isEven)
console.log(value)
