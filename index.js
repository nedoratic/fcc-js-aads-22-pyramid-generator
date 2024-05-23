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

// Because you are going to loop in the opposite direction, your loop needs to run while i is greater than 0. You can use the greater than operator > for this.

// Set your loop's condition to run when i is greater than 0.

for (let i = count; i > 0; false) {}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
