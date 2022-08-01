this.getSomething = "something";

var person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
  getFromFlobalObject: () => this.getSomething,
};

console.log(person.getFullName());
console.log(person.getFromFlobalObject());

var john = {
  firstname: "John",
  lastname: "Doe",
};

console.log(john.__proto__);
john.__proto__ = person;
console.log(john.__proto__);

console.log(john.getFullName());
console.log(john.firstname);

var jane = {
  firstname: "Jane",
};

jane.__proto__ = person;
console.log(jane.getFullName());

console.log(Object.toString());
console.log(Object.__proto__);
console.log(Object.__proto__.__proto__);
console.log(Object.__proto__.__proto__.__proto__);

console.log("\n-------------------\n");

for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ": " + john[prop]);
  }
}
