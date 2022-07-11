/*
A function's runtime scope describes the variables available for use inside a given function. The code inside a function has access to:

The function's arguments.
Local variables declared within the function.
Variables from its parent function's scope.
Global variables.
*/
// demo...
const myName = 'Andrew';
function introduceMyself(){
	const name = 'Students';
	function introduce(){
		console.log(`Hello ${name} I am ${myName}`);
	};
	return introduce();
}