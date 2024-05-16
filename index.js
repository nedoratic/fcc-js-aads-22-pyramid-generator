const character = '#';

const count = 8;

const rows = [];

for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);

// The logic for formatting this pyramid is likely going to get complicated, which means it's a great time to extract that code into a function.

// A function is a block of code that can be reused throughout your application. Functions are declared with the following syntax:

// function name(parameter) {

// }
// The function keyword tells JavaScript that the name variable is going to be a function. parameter is a variable that represents a value that is passed into the function when it is used. A function may have as many, or as few, parameters as you'd like. Like a for loop, the space between the curly braces is the function body.

// Declare a padRow function. Do not create any parameter variables yet. The function body should be empty. Remember that you need to use camel case for your naming convention.

function padRow() {}

const call = padRow();

console.log(call);
