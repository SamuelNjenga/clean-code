const myArray = [1,2,NaN,4];
console.log(myArray.indexOf(NaN) +myArray.indexOf(4)); 

const twitter = {name: "Proful" , follower:298}

twitter.follower = 300;
console.log(twitter.follower)

const foo = () => {
    return 'bar';
}

// function foo(){
//     return 'bar';
// }

// var x = null ?? "Ravin"
// var y = 1 ?? "Hi"
// console.log(y,x)

// console.log(null == undefined)
// console.log(null === undefined)


const numbers = [33,2,8];
numbers.sort();
console.log(numbers[1])

let persons = ["vandana","vanya","vidhushi","vini"];
console.log(persons);

let personsObj = {...persons};
console.log(personsObj);

console.log(false  == '0')
console.log(false === '0')