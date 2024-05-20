const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber);
}

// Rather than having to pass i + 1 to your padRow call, you could instead start your loop at 1. This would allow you to create a one-indexed loop.

// Update your iterator to start at 1 instead of 0.

// The pyramid looks a little funny now. Because you are starting the loop at 1 instead of 0, you do not need to add one to i when you pass it to padRow.

// Update the first argument of your padRow call to be i.

for (let i = 1; i < count; i++) {
	rows.push(padRow(i, count));
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
