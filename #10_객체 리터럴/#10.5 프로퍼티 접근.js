// 10-12
var person = {
  name: "Kim",
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Kim

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person["name"]); // Kim

// 10-13
var person = {
  name: "Kim",
};

console.log(person[name]); // RefernceError: name is not defined

// 10-14
var person = {
  name: "Kim",
};

console.log(person.age); // undefined

// 10-15
var person = {
    'last-name': 'Kim',
    1: 10,
};

person.'last-name'; // SyntaxError: Unexpected string
person.last-name; // 브라우저 환경: NaN
                  // Node.js 환경: ReferenceError: name is not defined
person[last-name]; // ReferenceError: last is not defined
person['last-name']; // Kim

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
person.1; // SyntaxError: Unexpected number
person.'1'; // SyntaxError: Unexpected string
person[1]; // 10 : person[1] -> person['1']
person['1']; // 10

