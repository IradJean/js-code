// function called it self is defined:
(function callYourself(){
	console.log('Hi, I am calling immediately after being declared');
})();
//Hi, I am calling immediately after being declared
// ex 2:
(function Aleter(){
	alert("Hi There!");
})();
// pop 'Hi There!'
(function AlertName(name){
	alert(`Hi Mr ${this.name}`);
})("Jean");
//IFE's, Private Scope, and Event Handling
