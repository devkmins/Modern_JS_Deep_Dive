// 11.2.1

// 11-11
var person = {
  name: "Lee",
};

// 11-12
// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
var person = {
  name: "Lee",
};

// person 변수에 저장되어 있는 참조 값으로 실제 객체에 접근한다.
console.log(person); // {name: "Lee"}

// 11-13
var person = {
  name: "Lee",
};

// 프로퍼티 값 갱신
person.name = "Kim";

// 프로퍼티 동적 생성
person.address = "Seoul";

console.log(person); // {name: "Kim", address: "Seoul"}

// 11-14
const o = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o };
console.log(c1 === o); // false
console.log(c1.x === o.x); // true

// lodash의 cloneDeep을 사용한 깊은 복사
// "nom install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행
const _ = require("lodash");
// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false

// 11-15
const v = 1;

// 깊은 복사라고 부르기도 한다.
const c1 = v;
console.log(c1 === v); // true

const o = { x: 1 };

// 얕은 복사라고 부르기도 한다.
const c2 = o;
console.log(c2 === 0); // true

// 11.2.2

// 11-16
var person = {
  name: "Lee",
};

// 참조 값을 복사(얕은 복사)
var copt = person;

// 11-17
var person = {
  name: "Lee",
};

// 참조 값을 복사(얕은 복사). copy와 person은 동일한 참조 값을 갖는다.
var copy = person;

// copy와 person은 동일한 객체를 참조한다.
console.log(copy === person); // true

// copy를 통해 객체를 변경한다.
copy.name = "Kim";

// person을 통해 객체를 변경한다.
person.address = "Seoul";

// copy와 person은 동일한 객체를 가리킨다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고 받는다.
console.log(person); // {name: "Kim", address: "Seoul"}
console.log(copy); // {name: "Kim", address: "Seoul"}

// 11-18
var person1 = {
  name: "Lee",
};

var person2 = {
  name: "Lee",
};

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true
