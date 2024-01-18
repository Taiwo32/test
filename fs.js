// const { error } = require("console");

const os = require("os");

console.log(os.platform(), os.homedir());

console.log(__dirname);
console.log(__filename);


var add = 2 + 1;

// console.log(add)

if (add === 4) {
    console.log("The correct answer is " + add)
}
else if(add < 5) {
    console.log("the answer is not up to 5")
}
else {
    console.log("you are not correct")
}

// area of a circle
// area of a square

var length = 5;

var AOS = (length * length);
if (AOS > 200) {
    console.log("Its greater than 200")
}

else {
    console.log("It is less than 200")
}

var radius = 20 

var AOC = (22 / 7 * radius * radius)

console.log (AOC)
if (AOC > 300 ){
    console.log("it is greater than 300")
}
else {
    console.log("it is not correct")
}

var sub = 7 - 10 ;
console.log(sub)
if (sub === - 3){
    console.log("the answer is correct");
}
else if (sub < 3){
    console.log("you are getting there");
}
else{
    console.log('you are wrong');
}

function myfunction() {
    console.log("I am a function")
}

console.log(myfunction());

// create a function an if statement 