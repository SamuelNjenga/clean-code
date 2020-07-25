const people = [{
        name: 'Kevin',
        lastName: 'Rodriguez',
        age: 25
    },
    {
        name: 'Mike',
        lastName: 'Wazowsky',
        age: 33
    },
    {
        name: 'Susan',
        lastName: 'Smith',
        age: 27
    },
]

//old forEach Array.prototype.forEach
//Has a function that contains 3 parameters: the current item, an index,and the original array
// people.forEach((person, index, array) => {
//     console.log(person.name);
//     console.log(person.lastName);
//     console.log(person.age);
// })

//forIn loop
// people.prototype = {what : 'is this'}
// for(const i in people){
//     const person = people[i];
//     console.log(person);
//     if(person.what){
//         console.log(person);
//     }
// }

//for-of loop ES6
// for(const person of people){
//     console.log(person);
// }

//C style for loop
// for(let i = 0; i< people.length;i++){
//     const person = people[i];
//     console.log(person);
// }

//while loop
// let i = 0
// while(i < people.length){
//     const person = people[i];
//     console.log(person);
//     i++;
// }

//do while loop
// let k = 0;
// if(people.length > 0){
//     do{
//         const person = people[k];
//         console.log(person);
//         k++;
//     }while(k < people.length)
// }

//Map method -> Array.prototype.map
// const peopleNames = people.map(person => person.name)
// console.log(peopleNames);

//filter method -> Array.prototype.filter
// const female = people.filter(person => (person.name === 'Susan'))
// console.log(female);

const sumOfAges = people.reduce((sum, person) => sum + person.age,0);
console.log(sumOfAges);