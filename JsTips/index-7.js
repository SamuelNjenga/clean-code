function Twitter(firstName, projectName){
    this.firstName = firstName
    this.projectName = projectName
}

const samuel = new Twitter('Samuel', 'Js Project');
const sally = Twitter('Sally', 'MongoDB Project');//Returns undefined

console.log(samuel);
console.log(sally);