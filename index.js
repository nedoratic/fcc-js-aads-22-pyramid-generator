const character = 'Hello';

const count = 8;

const rows = [];

for (let i = 0; i < count; i = i + 1) {
	rows.push(i);
}

let result = '';

// Now all of your numbers are appearing on the same line. This will not work for creating a pyramid.

// You will need to add a new line to each row. However, pressing the return key to insert a line break between quotes in JavaScript will result in a parsing error. Instead, you need to use the special escape sequence \n, which is interpreted as a new line when the string is logged. For example:

// lineOne = lineOne + "\n" + lineTwo;

// Use a second addition operator to concatenate a new line between the existing result value and the added row value.

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
