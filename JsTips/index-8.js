var count = 5;
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
       // console.log(i + count);
    }, 5000);
}

var b = 7;
var a = 0;

do {
    console.log(b);
    a++;
} while (a < 4)

//Need to calculate total
const amounts = [10,30,40,50];
//Option 1
let total = 0;
for(let num of amounts){
    total += num;
}
console.log(total);

//Option 2
let sum = 0;
amounts.forEach((num) => {
    sum += num
})
console.log(sum);
