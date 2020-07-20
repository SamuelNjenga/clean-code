//Checking if a value is an integer
const numbers = [23, true, "45", "", 43.43, 25.00, null, undefined, NaN, Infinity];
for (const num of numbers) {
    console.log(Number.isInteger(num)); //Returns true if Integer otherwise it returns false
}