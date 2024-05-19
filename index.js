const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return character.repeat(rowNumber);
}

// Your padRow function has two parameters which you defined. Values are provided to those parameters when a function is called.

// The values you provide to a function call are referred to as arguments, and you pass arguments to a function call. Here's a function call with "Hello" passed as an argument:

// test("Hello");

// Pass i + 1 and count as the arguments to your padRow call. Like parameters, arguments are separated by a comma.

for (let i = 0; i < count; i = i + 1) {
	rows.push(padRow(i + 1, count));
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
