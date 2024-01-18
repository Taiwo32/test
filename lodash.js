const _ = require ('lodash')

let people = ["brain", "james", "uzi", "sam", "john"]
const run = _.chunk(people,[2]);

console.log(run);

// const numbers = [1, 2, 3, 4, 5];

// // Double each number
// const doubledNumbers = _.map(numbers, num => num * 2);

// // Find the sum of all numbers
// const sum = _.sum(numbers);

// // Filter even numbers
// const evens = _.filter(numbers, num => num % 2 === 0);

