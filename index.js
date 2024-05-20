const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
	return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber);
}

// JavaScript also has support for multi-line comments. A multi-line comment starts with /* and ends with */.

// Unlike a single-line comment, a multi-line comment will encapsulate multiple lines.

// Use /* and */ to turn your current for loop, including the body, into a multi-line comment.

// Change the loop type from a for loop to a while loop.
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
