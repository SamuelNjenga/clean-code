// console.log(false == "");
// console.log(false == 0);
// console.log("" == "0");

function add(x){
    //Only change code below this line
    return function(y){
        return function(z){
            return x * y * z;
        }
    }
    //Only change code above this line
}
console.log(add(10)(20)(30))







