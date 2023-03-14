// 11.1.1 변경 불가능한 값

// 11-1
// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시 값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있따.
o.a = 1;
console.log(o); // {a: 1}

// 11.1.2 문자열과 불변성

// 11-2
// 문자열은 0개 이상의 문자로 이뤄진 집합이다.
var str1 = ""; // 0개의 문자로 이뤄진 문자열(빈 문자열)
var str2 = "Hello"; // 5개의 문자로 이뤄진 문자열

// 11-3
var str = "Hello";
str = "world";

// 11-4
var str = "string";

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
console.log(str[0]); // s

// 원시 값인 문자열이 객체처럼 동작한다.
console.log(str.length); // 6
console.log(str.toUpperCase()); // STRING

// 11-5
var str = "string";

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
// 하지만 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
str[0] = "S";

console.log(str); // string

// 11.1.3

// 11-6
var score = 80;
var copy = score;

console.log(score); // 100
console.log(copy); // 100

score = 100;

console.log(score); // 100
console.log(copy); // ?

// 11-7
var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); // 80 80
console.log(score === copy); // true

// 11-8
var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); // 80 80
console.log(score === copy); // true

// score 변수에는 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
// 따라서 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.
score = 100;

console.log(score, copy); // 100 80
console.log(score === copy); // false

// 11-9
var x = 10;

// 11-10
var copy = score;
