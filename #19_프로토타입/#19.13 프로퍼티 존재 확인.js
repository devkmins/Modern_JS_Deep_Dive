// 19-59
const person = {
  name: "Lee",
  address: "Seoul",
};

// person 객체에 name 프로퍼티가 존재한다.
console.log("name" in person); // true
// person 객체에 address 프로퍼티가 존재한다.
console.log("address" in person); // true
// person 객체에 age 프로퍼티가 존재하지 않는다.
console.log("age" in person); // false

// 19-60
console.log("toString" in person); // true

// 19-61
const person = { name: "Lee" };

console.log(Reflect.has(person, "name")); // true
console.log(Reflect.has(person, "toString")); // true

// 19.13.2

// 19-62
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false

// 19-63
console.log(person.hasOwnProperty("toString")); // false
