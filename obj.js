// Objects in depth
/*
declaring objects with new keyword
*/
const myNewObj = new Object();

const myVarAge = myNewObj.age = 22;
const myVarDept = myNewObj.dept = 'Computer Science';
const myVarFavLang = myVarmyNewObj.favProgrammingLanguage = 'Javascript';
const myVar = myNewObj.name = 'Jean';
console.log(myVarName);
console.log(myVarDept);
console.log(myVarAge);
console.log(myVarFavLang);
// object methods/functions===> object.keys() vs object.values()
const dictionary = {
  car: 'automobile',
  apple: 'healthy snack',
  cat: 'cute furry animal',
  dog: 'best friend'
};
Object.keys(dictionary);
Object.values(dictionary);
