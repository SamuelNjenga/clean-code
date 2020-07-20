//Accessing object properties dynamically
const twitList = {
    'Samuel': 3002,
    'Kevin': 2002,
    'Ann': 4002
}

const nameOne = 'Samuel'; //name can be dynamic meaning it can be changed
const followersA = twitList[nameOne]; //Using square bracket notation[], key can be passed from variable and respective value retrieved
console.log(`${nameOne} has ${followersA} followers`);

const nameTwo = 'Ann';
const followersB = twitList[nameTwo];
console.log(`${nameTwo} has ${followersB} followers`);