const character = '#';
const count = 8;
const rows = [];

// Now it is time for a bit of math. Consider a three-row pyramid. If we want it centered, it would look something like:

// ··#··
// ·###·
// #####

// Empty spaces have been replaced with interpuncts, or middle dots, for readability. If you extrapolate the pattern, you can see that the spaces at the beginning and end of a row follow a pattern.

// Update your blank space strings to be repeated rowCount - rowNumber times.

// Open up the console to see the result.

function padRow(rowNumber, rowCount) {
	return ' '.repeat(rowCount - rowNumber) + character.repeat(rowNumber) + ' '.repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
	rows.push(padRow(i + 1, count));
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
