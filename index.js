const character = '#';
const count = 8;
const rows = [];

let inverted = true;

function padRow(rowNumber, rowCount) {
	return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber);
}

// Sometimes you will want to run different code when an if condition is false. You can do this by adding an else block. An else block will only evaluate if the if block does not evaluate.

// The syntax to add an else block is:

// if (condition) {
//   logic
// } else {
//   logic
// }

// Add an else block to your if block.

// When inverted is false, you want to build a standard pyramid. Use .push() like you have in previous steps to achieve this.

for (let i = 1; i <= count; i++) {
	if (inverted) {
		rows.unshift(padRow(i, count));
	} else {
		rows.push(padRow(i, count));
	}
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
