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

/*
    for (let i = count; i > 0; i--) {
        rows.push(padRow(i, count));
    }
*/

// You can actually build the inverted pyramid without needing to loop "backwards" like you did.

// To do this, you'll need to learn a couple of new array methods. Start by using const to declare a numbers variable. Assign it an array with the elements 1, 2, and 3. Then log the numbers array.

const numbers = [1, 2, 3];

console.log(numbers);

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
