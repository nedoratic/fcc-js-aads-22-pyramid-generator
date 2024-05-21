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

// The text is gone again! Empty strings evaluate to false, making them a falsy value. You will learn more about truthy and falsy values in future projects.

// For now, remove your if statement entirely. Use let to declare a continueLoop variable and assign it the boolean false. Then use let to declare a done variable and assign it the value 0.

let continueLoop = false;

let done = 0;

// A while loop will run over and over again until the condition specified is no longer true. It has the following syntax:

// while (condition) {
//    logic;
// }

// Use that syntax to declare a while loop with continueLoop as the condition. The body should be empty.

while (continueLoop) {}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);
