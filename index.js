const character = '#';
const count = 8;
const rows = [];

// You can pass full expressions as an argument. The function will receive the result of evaluating that expression. For example, these two function calls would yield the same result:

// test(2 * 3 + 1);
// test(7);
// Looking at the pattern again:

// ··#··
// ·###·
// #####

// Update the character value to be repeated 2 * rowNumber - 1 times.

// Open up the console again to see the updated result.

function padRow(rowNumber, rowCount) {
	return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
	rows.push(padRow(i + 1, count));
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
