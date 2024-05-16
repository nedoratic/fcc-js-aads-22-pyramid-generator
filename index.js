// To generate a pyramid, you will need to create multiple rows. When you have to perform a task repeatedly until a condition is met, you will use a loop. There are many ways to write a loop.

// You are going to start with a basic for loop. for loops use the following syntax:

// for (iterator; condition; iteration) {
//     logic;
// }

// In the upcoming steps, you'll explore each component of a loop in detail. For now, construct a for loop that includes the terms "iterator", "condition", and "iteration" for the three components. Keep the loop body, the section within the curly braces {}, empty.

const character = 'Hello';

const count = 8;

const rows = [];

for (let i = 0; i < count; i = i + 1) {
	rows.push(i);
}

console.log(rows);

let result = '';

console.log(result);

// To manipulate the result string, you will use a different type of loop. Specifically, a for...of loop, which iterates over each item in an iterable object and temporarily assigns it to a variable.

// The syntax for a for...of loop looks like:

// for (const value of iterable) {

// }

// Note that you can use const because the variable only exists for a single iteration, not during the entire loop.

// Create a for...of loop to iterate through your rows array, assigning each value to a row variable.

for (const row of rows) {
}
