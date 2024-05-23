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

// Notice that like .push(), .unshift() returns the new length of the array after the element is added.

// Arrays also have a .shift() method. This will remove the first element of the array, unlike .pop() which removes the last element. Here is an example of the .shift() method:

// const numbers = [1, 2, 3];
// numbers.shift();
// The numbers array would be [2, 3].

// Declare a shifted variable, assign it the result of calling .shift() on your numbers array, and print the variable.

const numbers = [1, 2, 3];

const unshifted = numbers.unshift(5);

const shifted = numbers.shift();

console.log(numbers);

console.log(unshifted);

console.log(shifted);

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
