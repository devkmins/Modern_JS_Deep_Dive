// 10-19
var x = 1,
  y = 2;

var obj = {
  x: x,
  y: y,
};

console.log(obj); // {x: 1, y: 2}

// 10-20
let x = 1,
  y = 2;

// 프로퍼티 축약 표현
var obj = { x, y };

console.log(obj); // {x: 1, y: 2}

// 10-21
// ES5
var prefix = "prop";
var i = 0;

var obj = {};

// 게산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// 10-22
// ES6
const prefix = "prop";
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// 10-23
// ES5
var obj = {
  name: "Kim",
  sayHi: function () {
    console.log("Hi " + this.name);
  },
};

obj.sayHi(); // Hi Kim

// 10-24
// ES6
const obj = {
  name: "Kim",
  sayHi() {
    console.log("Hi " + this.name);
  },
};

obj.sayHi(); // Hi Kim
