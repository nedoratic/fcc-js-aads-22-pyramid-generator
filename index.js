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

// When you have a value that is explicitly written in your code, like the "Hello!" string in your function, it is considered to be hard-coded. Hard-coding a value inside a function might not make it as reusable as you'd like.

// Instead, you can define parameters for the function. Parameters are special variables that are given a value when you call the function, and can be used in your function to dynamically change the result of the function's code.

// To add a parameter to your function, you need to add a variable name inside the parentheses. For example, this demo function has a name parameter:

// function demo(name) {

// }

// name sounds like a useful parameter, so go ahead and add it to your padRow function.

// A function does not have to return a hard-coded value. It can return the value stored in a variable. Parameters are special variables for a function, so they can also be returned.

// Change your padRow function to return the name parameter directly.

// Variables in JavaScript are available in a specific scope. In other words, where a variable is declared determines where in your code it can be used.

// The first scope is the global scope. Variables that are declared outside of any "block" like a function or for loop are in the global scope. Your character, count, and rows variables are all in the global scope.

// When a variable is in the global scope, a function can access it in its definition. Here is an example of a function using a global title variable:

// const title = "Professor ";
// function demo(name) {
//   return title + name;
// }
// demo("Naomi")

// This example would return "Professor Naomi". Update your padRow function to return the value of concatenating your character variable to the beginning of the name parameter.

function padRow(name) {
	return character + name;
}

const call = padRow('CamperChan');

console.log(call);
