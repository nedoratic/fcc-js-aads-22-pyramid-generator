const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber);
}

/*
    for (let i = 1; i <= count; i++) {
        rows.push(padRow(i, count));
    }
*/

/*
    while (rows.length < count) {
        rows.push(padRow(rows.length + 1, count));
    }
*/

// TODO: Invert pyramid

// What if you made your pyramid upside-down, or inverted? Time to try it out!

// Start by creating a new for loop. Declare your iterator i and assign it the value of count, then use the boolean false for your condition and iteration statements.

for (let i = count; false; false) {}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
