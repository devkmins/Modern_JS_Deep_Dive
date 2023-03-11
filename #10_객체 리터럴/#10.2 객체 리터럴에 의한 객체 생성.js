// 10-1
var person = {
  name: "Kim",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  },
};

console.log(typeof person); // object
console.log(person); // {name: "Kim", sayHello: f}

// 10-2
var empty = {}; // 빈 객체
console.log(typeof empty); // object
