// 6-1

// 모두 숫자 타입이다.
var integer = 10;
var double = 10.12;
var negative = -20;

// 6-2
var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // true
console.log(octal === hex); // true

// 6-3

// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

// 6-4

// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.loog(1 * "string"); // NaN

// 6-5

// 쟈바스크립트는 대소문자를 구별한다.
var x = nan; // ReferenceError: nan is not defined
