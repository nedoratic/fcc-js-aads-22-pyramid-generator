const character = '#';
const count = 8;
const rows = [];

// You should now see the same bunch of characters in your console. Your padRow function is doing the exact same thing you were doing earlier, but now it's in a reusable section of its own.

// Use the addition operator to concatenate a blank space " " to the beginning and end of your repeated character string.

// Remember that you can use the + operator to concatenate strings like this:

// " " + "string"

function padRow(rowNumber, rowCount) {
	return ' ' + character.repeat(rowNumber) + ' ';
}

for (let i = 0; i < count; i = i + 1) {
	rows.push(padRow(i + 1, count));
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
