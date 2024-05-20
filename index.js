const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber);
}

// TO DO: Change the loop type from a for loop to a while loop.
/*
    for (let i = 1; i <= count; i++) {
	    rows.push(padRow(i, count));
    }
*/

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
