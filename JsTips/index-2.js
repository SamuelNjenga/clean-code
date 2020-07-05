const array = ['a','a','b','c','d','c','a'];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);//Prints [ 'a', 'b', 'c', 'd' ]


var proLan = ['JS','Python','GO','C#'];
var ans = proLan.shift();
console.log(ans);//Prints JS

const arr = [12,44,21,56,8,46,89,90];
const smallest = (arr) => Math.min(...arr);
console.log(smallest(arr));//Prints 8

let nums = [10,15,25];
let sum = nums[1] + nums.sort()[1];
console.log(sum);

let a, {a:b = 1} = {a};
console.log(b);//Prints 1

if([]){
    console.log([] == true);//Prints false
}

const myArray = [1,2,NaN,4];
console.log(myArray.indexOf(NaN) + myArray.indexOf(4));


