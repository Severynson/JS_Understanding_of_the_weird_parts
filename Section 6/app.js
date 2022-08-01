// function Person(firstname, lastname) {
//   console.log(this);
//   this.firstname = firstname;
//   this.lastname = lastname;
//   console.log("This function is invoked.");
// }

// Person.prototype.getFullName = function () {
//   return this.firstname + " " + this.lastname;
// };

// var john = new Person("John", "Doe");

// console.log(john);
// console.log(typeof Person);
// console.log(john.getFullName());

//////////////////////////////////////////////

// "new" operator works similar to bind for a function called after it.
// it calls the function and bind 'this's inside of it to object created before;
// so... Creating of properties happends insoide of this {} after calling the constructor function;

// it is smthng like...

// const protoOfANewConstructorFunction = {};

// function newConstructorFunction(objectToBindContext) {
//   return function (name, id) {
//     this.name = name;
//     this.id = id;

//     this.__proto__ = protoOfANewConstructorFunction;
//     return this;
//   }.bind(objectToBindContext);
// }

// protoOfANewConstructorFunction.getNameAndId = function () {
//   return (
//     "------------------\n" +
//     "name: " +
//     this.name +
//     ";\nid: " +
//     this.id +
//     ";" +
//     "\n------------------"
//   );
// };

// const a = newConstructorFunction({})("a", "#123");
// const b = newConstructorFunction({})("b", "#124");

// console.log(a);
// console.log(b);
// console.log(a.__proto__);
// console.log(b.__proto__);
// console.log(a.getNameAndId());
// console.log(b.getNameAndId());

//////////////////////////////////////////////

// String.prototype.isLengthGreaterThan = function (limit) {
//   return this.length > limit;
// };

// console.log("John".isLengthGreaterThan(3));

// Number.prototype.isPositive = function () {
//   return this > 0;
// };

// console.log(new Number(2).isPositive());
// console.log(new Number(-2).isPositive());

//////////////////////////////////////////////

Array.prototype.myCustomFeature = "cool!";

var arr = ["John", "Jane", "Jim"];

// Don't use this because it is not safe;
// This loop will iterate a properties of a prototype also;

for (var prop in arr) {
  console.log(prop + ": " + arr[prop]);
}

// Use simple "for" loop for iterating objects and arrays as more safe;

for (var i = 0; i < arr.length; i++) {
  console.log(i + ": " + arr[i]);
}

var person = {
  firstname: "Default",
  lastname: "Default",
  greet: function () {
    return "Hi " + this.firstname + "!";
  },
};

var john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";
console.log(john);
console.log(john.greet());
