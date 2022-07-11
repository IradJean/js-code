// learning function call backs in udacity:
// function that is passed as an argument into another function is called a callback function.
// demo... 
function mainFunction(n, callBackFunction){
	return n+callBackFunction();
};
callBackFunction(){
	return 6;
};
mainFunction(45, callBackFunction)
// EX 2 displaying all negative elements of an array:
function each(array, callback){
	for(var i = 0; i<array.length; i++){
		if(!callback(array[i])){
			console.log(array[i]);
		}
	}
}
function isPostive(n){
	return n>0;
}
each([-2,-5,3,6,-7,10, -9], isPostive)
// array methods: ** forEach(), ** map(), ** filter()
//1
//forEach() allows you to iterate (i.e., loop) through an array, similar to using a for loop.
// syntax
//array.forEach(function callback(currentValue, index, array) {
    // function code here
// });

//ex: a functon that takes in a number and logs it to the console if it is even:
function logEvenNum(num){
if(num % 2 === 0){
	console.log(num);
}
}
// lets say we have an array = [1,3,4,6,7,8,9,11,23,22,44,67]
// lets use forEach() to dispaly all the even elements:
[1,3,4,6,7,8,9,11,23,22,44,67].forEach(logEvenNum)
// alternatively using for loop:
for(var i = 0; i< array.lenggth; i++){
	console.log(logEvenNum(array[i]));
}
//ex2: use of forEach()
const allColors = ['red', 'green', 'white', 'black', 'yellow', 'blue', 'cyan', 'violet', 'grey', 'indigo', 'purple', 'gold'];
const myFavColor = ['green', 'white', 'black'];
function pickFavColor(favColor){
	if(!favColor){
		console.log(myFav);
	}
};
allColors.forEach(pickFavColor);
//Array's map() method is similar to forEach() in that it invokes a callback function for each element in an array. 
//However, map() returns a new array based on what's returned from the callback function
//demo...

// return the length of names in the array
const Names = ['Johns', 'David', 'Peter', 'Paul', 'Mugeni'];
const namesLengths = Names.map(function(name){
	return name.length;
});

console.log(namesLengths);
// returning the UPPER CASE OF AN ARRAY;