// 12.4.1

// 12-5
// 함수 선언문
function add(x, y){
    return x + y;
}

// 함수 참조
// console.dir은 console.log와는 달리 함수 객체의 프로퍼티까지 출려한다.
console.dir(add); // f add(x, y)

// 함수 호출
console.log(add(2, 5)); // 7

// 12-6
// 함수 선언문은 함수 이름을 생략할 수 없다.
function (x, y){
    return x + y;
}
// SyantaxError

// 12-7
// 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
// 하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.
var add = function add(x, y){
    return x + y;
}

// 함수 호출
console.log(add(2, 5)); // 7

// 12-8
// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() { console.log('foo'); }
foo(); // foo

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar() { console.oog('bar'); });
bar(); // ReferenceError: bar is not defined

// 12-9
var add = function add(x, y){
    return x + y;
};

console.log(add(2, 5)); // 7