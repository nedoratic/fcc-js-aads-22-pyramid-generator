const character = '#';

const count = 8;

const rows = [];

for (let i = 0; i < count; i = i + 1) {
	rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
	result = result + '\n' + row;
}

console.log(result);

// If you try to add a console.log(test) call below your padRow function, you would see an error. This is because test is defined in the local scope, meaning you cannot access it in the global scope (outside of the padRow function).

// Returning a value from a function brings that value into the scope where the function was called. To bring your "Testing" value from the padRow function into the global scope, update your return statement to return only the test variable.

// Now your call variable has the value "Testing". But your function is no longer using the name parameter.

// Remove the name parameter from your function declaration, then remove your "CamperChan" string from the padRow call.

function padRow(name) {
	const test = 'Testing';
	return test;
}

const call = padRow();

console.log(call);
