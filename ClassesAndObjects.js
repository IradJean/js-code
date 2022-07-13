//OOP
//constructor definition
  function CallName(){
    this.name = "Jean";
    this.age = 22;
  };
  var myProf = new CallName();
  var profile = new CallName();
  console.log(myProf);
  //CallName{name: 'Jean', age: 22}

// Passing arguments to the constructors
function MyConstruct(name){
  this.age= 34;
  this.Name = name;
}
var Philbert = new MyConstruct('Philbert Nsengiyumva');
console.log(Philbert);
// MyConstruct{age: 34, Name: 'Philbert Nsengiyumva'}
 
 function Hero(name, role){
  this.name = name;
  this.role = role;
  this.introduce = function(){
    console.log(`My name is ${this.name} and I am a ${this.role}`);
  }
 }
 var student = new Hero("Jean", "Learner");
 // accessing members of our class...
 student.name;
 student.role;
 student.introduce();
// trial; 
function trialCamelCase(){
  this.name = "Jean De Dieu";
  this.age = 43;
}

const MyProfile = new trialCamelCase();
console.log(MyProfile);

//trialCamelCase{name: 'Jean De Dieu', age: 43}