//Magic numbers -> Assign number with no clear meaning

const SECONDS_IN_A_PLAY = 86400
for (let i = 0; i < SECONDS_IN_A_PLAY; i++) {
  //...
}

//Deep nesting

const exampleArray = [[['value']]]

const retrieveFinalValue = (element) => {
    if(Array.isArray(element)){
        return retrieveFinalValue(element[0])
    }
    return element;
}

console.log(retrieveFinalValue(exampleArray))


//Stop writing comments -> Although subjective, 
//In a way may indicate your code is not self explanatory
//Code must speak for itself

/*
While comments  are neither inherently good or bad,
they are frequently used as a crutch.
You should always write your code as if comments didn't exist.
This forces you to write your code in the simplest,plainest,
most self-documenting way you can humanly come up with. - Jeff Atwood
*/

//Avoid large functions

const addMultiplySubtract = (a,b,c) => {
//addition
const addition = a + b + c;
//multiplication
const multiplication = a * b * c;
//subtraction
const subtraction = a - b - c;

//return a string (addition,multiplication,subtraction)

return `${addition} ${multiplication} ${subtraction}`
}

console.log(addMultiplySubtract(9,4,2))

//Similar functions which diffrentiate logic
const add = (a,b,c) => a + b + c
const multiply = (a,b,c) => a * b * c
const subtract = (a,b,c) => a - b -  c

//Code repetition
const getUserCredentials = (user) => {
    const name = user.name;
    const surname = user.surname;
    const password = user.password;
    const email = user.email;
}

//ES6 Object Destructuring
const getUserCredentials = (user) => {
    const {name,surname,password,email} = user;
}


//VARIABLE NAMING -> Use CamelCase

const camelCase = '';
let thisIsARandomCamelCase;

//VARIABLE NAMING -> Use meaningful names
getUserData;
getUserInfo;

getUserPosts;

//Favor descriptive over concise 

findUserByNameOrEmail;
setUserLoggedInTrue;

//Use shorter version
getUserFromDatabase;

getUser;

//Function Naming -> Should be a verb 
//Use consistent verbs per concept
//Functions will usually create,read,update or delete something


//Instead of using the below naming conventions for functions
returnUsers;
retrieveUsers;
//Make use of 
getUsers;
getQuestions;
getCoders;

//Make booleans that read well in if-else statements
let car = {}
isSedan,isSold,isGreen,hasAirbag
car.isSedan,car.isSold,car.isGreencar.hasAirbag

//Use nouns for class Names
class Car {
// ...
}
//Use PascalCase for classNames

camelCase
PascalCase
class Task {

}

//Capitalize constant values SNAKE UPPER CASE
const HOURS_IN_A_DAY = 24;
const USER_AGE = 30;

//Avoid one-letter variable naming
//Use
const query = () => {}
//Instead of
const q = () => {}
//Use
const newDate = () => new Date();
//Instead of
const d = () => new Date()

//Only use one-lette variable naming in small functions

for(let i = 0;i < 10;i++){
    // ...
}