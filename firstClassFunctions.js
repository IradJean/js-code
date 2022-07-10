//storing a function in a variable
const myVar = function prod(n1, n2){
	return n1*n2;
}
// calling a function as a variable will work like:
myVar(45,2);
//90
//checking function length and function name:
function average(n1, n2, n3){
	return (n1+n2+n3)/3;
}
average.length      average.name
//returns 3          //returns 'average'

// functions returning other functions==> higher order functions
//demo:
function alertMssgThenreturn(){
	alert('Message1');
	return function mssge(){
		alert('Message2');
	};
}
//invoking the returned function, declare a variable and call it as fucntion:
const innerFunction = alertMssgThenreturn();
innerFunction();
//or invoke simply by just putting ()() around the higher oder function:
alertMssgThenreturn()();