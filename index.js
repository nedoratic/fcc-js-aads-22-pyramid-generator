const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber);
}

// Comments can be helpful for explaining why your code takes a certain approach, or leaving to-do notes for your future self.

// In JavaScript, you can use // to leave a single-line comment in your code.

// Add a single-line comment above your function to remind yourself to change the code to a different kind of loop.

// Change the loop type from a for loop to a while loop.
for (let i = 1; i <= count; i++) {
	rows.push(padRow(i, count));
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
