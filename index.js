const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop

/*
    for (let i = 1; i <= count; i++) {
        rows.push(padRow(i, count));
    }
*/

// Your loop is no longer relying on the continueLoop variable. This makes the variable an unused declaration. Generally, you want to avoid unused declarations to prevent future confusion.

// Remove your continueLoop variable.

let done = 0;

while (done !== count) {
	done++;

	rows.push(padRow(done, count));
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
