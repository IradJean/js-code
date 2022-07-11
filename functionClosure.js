//process of a function retaining access to its scope is called a closure
// closure definition: "the combination of a function and the lexical environment within which that function was declared."
// demo...
const num = 10;
function FunctionOne(){
	const otherNum = 5;
	function FunctionTwo(){
		console.log(otherNum);
	};
	return FunctionTwo();
}
FunctionOne();
// 5
//passing argguments implicitly:
function OuterFunction(){
	let num1 = 10;
	return function(num2){
		return num2+num1;
	};
}
const getValue = OuterFunction();
console.log(getValue(35));
/*

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/
function expandArray(){
    let myArray = [1,1,1];
    return function(){
        myArray = myArray.concat(1);
        return myArray;
    };
}
const getAns = expandArray();
console.log(getAns());
// Garbage Collection:

unction myCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}
/*
The existence of the nested function keeps the count variable from being available for garbage collection,
 therefore count remains available for future access. After all, a given function (and its scope) does not 
 end when the function is returned.
 Remember that functions in JavaScript retain access to the scope that they were created in!
 */
 