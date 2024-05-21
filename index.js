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

let continueLoop = false;

let done = 0;

// The equality operator can lead to some strange behavior in JavaScript. For example, "0" == 0 is true, even though one is a string and one is a number.

// The strict equality operator === is used to check if two values are equal and share the same type. As a general rule, this is the equality operator you should always use. With the strict equality operator, "0" === 0 becomes false, because while they might have the same value of zero, they are not of the same type.

// Update your done == count condition to use the strict equality operator.

// When done has reached the value of count, we want the loop to stop executing.

// Inside your if body, assign the boolean false to your continueLoop variable.

// To make your pyramid generate again, push the result of calling padRow with done and count as the arguments to your rows array, similar to what you did in your first loop.

while (continueLoop) {
	done++;

	rows.push(padRow(done, count));

	if (done === count) {
		continueLoop = false;
	}
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
