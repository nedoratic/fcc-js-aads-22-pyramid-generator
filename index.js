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

// In order to know how to format a row, your padRow function will need to know which row number you are on, and how many rows in total are being generated.

// The best way to do this is by creating function parameters for them. Give your padRow function a rowNumber and rowCount parameter. Multiple parameters are separated by a comma:

// function name(first, second) {

// };

function padRow(rowNumber, rowCount) {}

const call = padRow();

console.log(call);
