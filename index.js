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

// The text has appeared again! This is because "false" is a string, which when evaluated to a boolean becomes true. This means "false" is a truthy value.

// A truthy value is a value that is considered true when evaluated as a boolean. Most of the values you encounter in JavaScript will be truthy.

// A falsy value is the opposite - a value considered false when evaluated as a boolean. JavaScript has a defined list of falsy values. Some of them include false, 0, "", null, undefined, and NaN.

// Try changing your if condition to an empty string "", which is a falsy value.

if ('false') {
	console.log('Condition is true');
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
