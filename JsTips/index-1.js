const list = [ 1, 2, 3, 4, 5 ];
const [ , , x ] = list; //means skip first two and declare a variable x that will be assigned a value of the 3rd element of the array
// console.log(x); //prints 3
// console.log(list);

const fun = (n) => (n > 0 ? fun(n - 1) + 'o' : 'yah');
console.log(fun(2)); //prints yahoo

let points = 100;
let winner = false;

if (points > 90) {
	let winner = true;
}

console.log(winner); //Prints false

const todo = {
	task: 'Learn more about console.Did you know it has a table() function?',
	assignee: 'We',
	finished: false
};
console.log(todo);