// var people = [
//   // the 'john' object;
//   {
//     firstname: "John",
//     lastname: "Doe",
//     addresses: ["111 Main St.", "222 Third St."],
//   },
//   // the 'jane' object;
//   {
//     firstname: "Jane",
//     lastname: "Doe",
//     addresses: ["333 Main St.", "444 Fifth St."],
//     greet: function () {
//       return "Hello!";
//     },
//   },
// ];

///////////

// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof null);
// console.log("-----------");

// // Interesting, but works differently;

// console.log(Object.prototype.toString.call([]));
// console.log("nothing is logging here (for [].toString());", [].toString());

///////////

// function Person(name) {
//   this.name = name;
// }

// var e = new Person("Jane");
// console.log(e instanceof Person);
// console.log({} instanceof Person);
// console.log({} instanceof Object);

///////////

function logNewPerson() {
  "use strict";

  var person2;
  person2 = {};
  console.log(person2);
}

var person;
persom = {};
console.log(persom);
logNewPerson();
