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

// There is a bit of a problem, here. Your test declaration is currently after your return statement. An important thing to know about the return keyword is that it does not just define a value to be returned from your function, it also stops the execution of your function code. This means that any code after a return statement will not run.

// Move your test initialization to the line above your return statement.

function padRow(name) {
	const test = 'Testing';
	return character + name;
}

const call = padRow('CamperChan');

console.log(call);
