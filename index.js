const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber);
}

// Sometimes you may wish to bring back previous code that you commented out. You can do so by removing the /* and */ around that code. This is called uncommenting.

// Uncomment only your first for loop. Leave the single line comment and the other two multi line comments in place.

for (let i = 1; i <= count; i++) {
	rows.push(padRow(i, count));
}

/*
    while (rows.length < count) {
        rows.push(padRow(rows.length + 1, count));
    }
*/

/*
    for (let i = count; i > 0; i--) {
        rows.push(padRow(i, count));
    }
*/

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
