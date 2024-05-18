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

function padRow(name) {
	return 'Hello!';
}

const call = padRow();

console.log(call);
