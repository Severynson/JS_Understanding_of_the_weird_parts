// const person = new Object();

// const firstNameProperty = "firstname";

// person[firstNameProperty] = "Severyn";
// person["lastname"] = "Kurach";

// console.log(person);
// console.log(person[firstNameProperty]);
// console.log(person.firstname);
// console.log(person.lastname);

// person.addres = new Object();
// person.addres.street = "111 Main St.";
// person["addres"]["city"] = "Lviv";

// const addres = person.addres;

// console.log(addres["street"], ",", addres.city);

///////////////////////////////////////////////

// //////////////////////////////////////
// /**/ var person = {}; /*////////////*/
// /**/ console.log(person); /*////////*/
// /////////// Fully the same ///////////
// /**/ var person = new Object(); /*//*/
// /**/ console.log(person); /*////////*/
// //////////////////////////////////////

// // This is just a short form...
// var person = { name: "Severyn", lastname: "Kurach" };
// console.log(person);
// // To write this...
// var person = Object();
// person.name = "Severyn";
// person.lastname = "Kurach";
// console.log(person);

/////////////////////////////////////////////

// const Tony = {
//   firstname: "Tony",
//   lastname: "Alicea",
//   addres: {
//     street: "111 Main St.",
//     street: "New York",
//     street: "NY",
//   },
// };

// function greet(person) {
//   console.log("Hi " + person.firstname + "!");
// }

// greet(Tony);
// greet({ firstname: "Mary", lastname: "Doe" });

/////////////////////////////////////////////

// var greet = "Hello!";
// var greet = "Hola!";

// console.log(greet);
// var english = {};
// var spanish = {};

// english.greet = "Hello!";
// spanish.greet = "Hola!";

// console.log(english);

/////////////////////////////////////////////

// var objectLiteral = {
//   firstname: "Mary",
//   isAProgrammer: true,
// };

// console.log(JSON.stringify(objectLiteral));

// var jsonValue = JSON.parse('{ "firstname": "Marry", "isAProgrammer": true }');

// console.log(jsonValue);

/////////////////////////////////////////////

// function greet() {
//   console.log("Hi!");
// }

// greet.language = "english";
// console.log(greet);
// console.log(greet());
// console.log(greet.language);
// console.log(greet.length, "What ???? :/ !!!???");

// //////// Function is something like ... ////////////

// const greetings = {
//   argument: "sss",
//   almoustFunction: JSON.stringify(this) + greetings.argument + "!",
// };

// greetings.argument = "Severyn";
// console.log(greetings.argument);
// console.log(greetings.almoustFunction);

/////////////////////////////////////////////

// const functionA = function functionB() {
//   console.log(
//     "I'm the same function :) Are you confused? I can't be called by my second name, but still - it exists..."
//   );
// };

// functionA();

/////////////////////////////////////////////

// const someObject1 = {
//   name: "Some object",
//   contains: {
//     name: "One more object",
//     contains: null,
//   },
// };

// console.log(someObject1);

// const someObject2 = someObject1;

// console.log(someObject2);

// someObject1.name = "Changed name";

// console.log(someObject2.name);

/////////////////////////////////////////////

// function a() {
//   console.log(this);
//   this.newVariable = "hello";
// }

// const b = function () {
//   console.log(this);
//   console.log(this.newVariable);
// };

// a();
// b();

// var c = {
//   name: 'The "C" object',
//   log: function () {
//     const self = this;

//     self.name = 'Update the "C" object!';
//     console.log(self);

//     var setname = function (newname) {
//       self.name = newname;
//     };
//     setname('Updated again! The "C" object.');
//     console.log(self);
//   },
//   experiment: {
//     func: function () {
//       console.log(this);
//     },
//   },
// };

// c.log();
// c.experiment.func();

/////////////////////////////////////////////

// var arr = [
//   1,
//   false,
//   {
//     name: "Tony",
//     address: "111 Main St.",
//   },
//   function (name) {
//     var greeting = "Hello";
//     console.log(greeting, name);
//   },
//   "hello",
// ];

// console.log(arr, "\n");

// arr[3](arr[2].name);

/////////////////////////////////////////////

// function greet(firstname, lastname, language = "en") {
//   if (arguments.length === 0) {
//     console.log("Missing parameters!");
//     console.log("-------------------");
//     return;
//   }

//   console.log(firstname);
//   console.log(lastname);
//   console.log(language);
//   console.log(arguments);
// }

// greet();
// greet("John");
// greet("John", "Doe");
// greet("John", "Doe", "en");

/////////////////////////////////////////////

// function greet(firstname, lastname, language = "en") {
//   const fullname = " " + firstname + " " + lastname;

//   if (language === "en") {
//     console.log("Hello" + fullname);
//   }
//   if (language === "es") {
//     console.log("Hola" + fullname);
//   }
// }

// function greetEnglish(firstname, lastname) {
//   greet(firstname, lastname, "en");
// }
// function greetSpanish(firstname, lastname) {
//   greet(firstname, lastname, "es");
// }

// greetEnglish("Severyn", "Kurach");
// greetSpanish("Severyn", "Kurach");

/////////////////////////////////////////////

// const myName = "Severyn";

// const greeting = (function hello(name) {
//   return "Hello " + name + "!";
// })(myName);

// console.log(greeting);

// console.log(
//   (function hello(name) {
//     return "Hello " + name + "!";
//   })(myName)
// );

/////////////////////////////////////////////

// var greeting = "Hola";
// console.log(greeting); // if it would be "let greeting" -
// // this would be undefined -> console.log(global.greeting);
// // let is not creating variable in global object

// (function (global, name) {
//   var greeting = "Hello";
//   console.log(global.greeting);
//   global.greeting = "Hello";
//   console.log(greeting + " " + name);
// })(window, "Severyn");

// console.log(greeting);

/////////////////////////////////////////////

// function greet(whattosay) {
//   return function (name) {
//     console.log(whattosay + " " + name);
//   };
// }

// const sayHello = greet("Hello");
// const sayHi = greet("Hi");
// sayHello("Severyn");
// sayHi("Severyn");

// // or...

// greet("Hello")("Severyn");
// greet("Hola")("Severyn");

/////////////////////////////////////////////

// function buildFunctions() {
//   var arr = [];

//   for (var i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }

//   return arr;
// }

// var fs = buildFunctions();
// fs.map((functions) => functions());

/////////////////////////////////////////////

// // To solve a problem of 3, 3, 3 after calling all the result functions
// function buildFunctions() {
//   var arr = [];

//   for (var i = 0; i < 3; i++) {
//     // // // This way:
//     //
//     // // let j = i; // adding this
//     // // arr.push(function () {
//     // //   console.log(
//     // //     // Changing this -> i;
//     // //     // for this => j;
//     // //     j
//     // //   );
//     // // });

//     // Or closure instead;
//     arr.push(
//       (function (j) {
//         return function () {
//           console.log(j);
//         };
//       })(i)
//     );
//   }

//   return arr;
// }

// var fs = buildFunctions();
// fs.map((functions) => functions());

/////////////////////////////////////////////

// var person = {
//   firstname: "John",
//   lastname: "Doe",
//   getFullName: function () {
//     var fullname = this.firstname + " " + this.lastname;
//     return fullname;
//   },
// };

// var logName = function (lang1, lang2) {
//   console.log("Logged: " + this.getFullName());
//   console.log("Arguments: " + lang1 + " " + lang2);
//   console.log("--------------------------------");
// }; // or .bind(...) righr here

// logName.bind(person)(); // creates a copy of the function;
// logName.call(person, "en", "es"); // just calling a function instead of creating a copy;
// logName.apply(person, ["en", "es"]); // same as call but needs an array of arguments like second argument after binding "this" word;

/////////////////////////////////////////////

function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

// var arr2 = [];

// for (var i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 2);
// }

var arr2 = mapForEach(arr1, (item) => item * 2);

console.log(arr2);

var arr3 = mapForEach(arr1, (item) => item > 2);

console.log(arr3);

var checkPastLimit = function (limiter, item) {
  return item > limiter;
};

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

var checkPastLimitSimplified = function (limiter) {
  return function checkPastLimit(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);
