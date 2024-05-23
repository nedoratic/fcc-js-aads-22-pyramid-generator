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

// Because you are only subtracting one from i, you can use the decrement operator --.

// Replace your subtraction assignment with the decrement operator.

for (let i = count; i > 0; i--) {
	rows.push(padRow(i, count));
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
