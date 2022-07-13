//here are yet two more ways to invoke a function: either using the call() or the apply() methods.
//et's take a closer look at each of these methods, starting with call()!
/*call()
call() is a method directly invoked onto a function. We first pass into it a single value to set as the value of this; 
then we pass in any of the receiving function's arguments one-by-one, separated by commas.*/
// demo...
function multiply(n1, n2){
	return n1*n2;
}
 // we can invoke this function as follow:
 multiply(24,56);
 // invoking the same function using call():
 multiply.call(window,24,56);
 //calling methods of an objects using call():
 const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};
// you can invoke the method using: mockingbird.describe();
// using call();
const pride = {
  title: 'Pride and Prejudice'
};
mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'

// use of apply()....
/*apply()
Just like call(), the apply() method is called on a function to not only invoke that function,
 but also to associate with it a specific value of this. However, rather than passing arguments one-by-one, 
 separated by commas -- 
apply() takes the function's arguments in an array. Recall the multiply() function from earlier:
*/
function multiply(n1, n2){
	return n1*n2;
}
// multiply(2,5); or:
multiply.apply(window, [2,5]);
/*call() may be limited if you don't know ahead of time the number of arguments that the function needs. 
In this case, apply() would be a better option, since it simply takes an array of arguments,
 then unpacks them to pass along to the function.
 Keep in mind that the unpacking comes at a minor performance cost, but it shouldn't be much of an issue.
*/