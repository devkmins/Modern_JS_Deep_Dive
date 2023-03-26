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

// 14.3.3 모듈 패턴

// 14-7
var Counter = (function () {
  // private 변수
  var num = 0;

  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
