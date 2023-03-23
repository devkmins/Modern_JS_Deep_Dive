// 14.3.1 즉시 실행 함수

// 14-4
(function () {
  var foo = 10; // 즉시 실행 함수의 지역 변수
  // ...
})();

console.log(foo); // ReferenceError

// 14.3.2 네임스페이스 객체

// 14-5
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = "Lee";

consolee.log(MYAPP.name); // LEe

// 14-6
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.person = {
  name: "Lee",
  address: "Seoul",
};

console.log(MYNAME.person.name); // Lee
