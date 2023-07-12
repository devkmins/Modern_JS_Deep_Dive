// 19-29
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person("Lee");

// hasOwnProperty는 Object.prototype의 메서드다.
console.log(me.hasOwnProperty("name")); // true

// 19-30
Object.getPrototypeOf(me) === Person.prototype; // -> true

// 19-31
Object.getPrototypeOf(Person.prototype) === Object.prototype; // -> true

// 19-32
// hasOwnProperty는 Object.prototype의 메서드다.
// me 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색하여 사용한다.
me.hasOwnProperty("name"); // -> true

// 19-33
Object.prototype.hasOwnProperty.call(me, "name");

// 19-34
console.log(me.foo); // undefined

// 19-35
me.hasOwnProperty("name");
