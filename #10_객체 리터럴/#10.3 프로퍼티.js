// 10-3
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Kim'
  name: "Kim",
  // 프로퍼티 키는 age, 프로퍼티 값은 22
  age: 22,
};

// 10-4
var person = {
    firstName: 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Kim', // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
}

console.log(person); // {firstName: "Ung-mo", last-name: "Kim"}

// 10-5
var person = {
    firstName: 'Ung-mo',
    last-name: 'Kim' // SyntaxError: Unexpected token -
}

// 10-6
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world };

console.log(obj); // {hello: "world"}

// 10-7
var foo = {
    '': '' // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
};

console.log(foo); // {"": ""}

// 10-8
var foo = {
    0: 1,
    1: 2,
    2: 3,
};

console.log(foo); // {0: 1, 1: 2, 2: 3}

// 10-9
var foo = {
    var: '',
    function: ''
};

console.log(foo); // {var: "", function: ""}

// 10-10
var foo = {
    name: 'Lee',
    name: 'Kim',
};

console.log(foo); // {name: "Kim"}