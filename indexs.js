console.log('hello node')

var greeting = "Good morning";
console.log(greeting + " Taiwo")


const person = {firstName:"John", lastName:"Doe", age: 45, occupation: "software developer"};
console.log(person.firstName, person.lastName,person.occupation,person.age)
// var name = "Good morning Mr"
// console.log(name + person.firstName, person.lastName, person.age, person.occupation)

console.log("Mr " + person.firstName + person.lastName + " is a " + person.occupation + " and he is " + person.age + " years old.")

const cars = ["Saab", "Volvo", "BMW", "Toyota", "Ferrari", "Lexus Rx350", "ford explorer"];

console.log(cars[0]);

setTimeout(() => {
    console.log("timeout");
    // clearInterval(int);
}, 3000);

// const int = setInterval(() => {
//     console.log("in the interval")
// })

// console.log(document.querySelector);