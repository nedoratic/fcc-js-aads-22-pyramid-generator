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

// Right now, if you change continueLoop to true, your while loop will run forever. This is called an infinite loop, and you should be careful to avoid these. An infinite loop can lock up your system, requiring a full restart to escape.

// To avoid this, start by using the increment operator to increase the value of the done variable inside your loop.

// The equality operator == is used to check if two values are equal. To compare two values, you'd use a statement like value == 8.

// Add an if statement to your loop. The statement should check if done is equal to count using the equality operator.

while (continueLoop) {
	done++;

	if (done === count) {
	}
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
