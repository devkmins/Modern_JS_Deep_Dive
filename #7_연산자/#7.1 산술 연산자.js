// 7-1
// 산술 연산자
5 * 4; // -> 20

// 문자열 연결 연산자
"My name is " + "Kim"; // -> 'My name is Kim'

// 할당 연산자
color = "red"; // -> 'red'

// 비교 연산자
3 > 5; // -> false

// 논리 연산자
true && false; // -> false

// 타입 연산자
typeof "Hi"; // -> string

/* 7.1.1 이항 산술 연산자 */

// 7-2
5 + 2; // -> 7
5 - 2; // -> 3
5 * 2; // -> 10
5 / 2; // -> 2.5
5 % 2; // -> 1

/* 7.1.2 단항 산술 연산자 */

// 7-3
var x = 1;

// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++; // x = x + 1;
console.log(x); // 2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x--; // x = x - 1;
console.log(x); // 1

// 7-4
var x = 5,
  result;

// 선할당 후증가
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당

result = --x;
console.log(result, x); //5 5

// 7-5

// 아무런 효과가 없다.
+10; // 10
+-10; // -10

// 7-6
var x = "1";

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x); // 1

// 불리언 값을 숫자로 타입 변환한다.
x = false;
console.log(+x); // 0

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = "Hello";
console.log(+x); // NaN

// 7-7

// 부호를 반전한다.
-(-10); // 10

// 문자열을 숫자로 타입 변환한다.
-"10"; // -10

// 불리언 값을 숫자로 타입 변환한다.
-true; // -1

// 문자열은 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
-"Hello"; // NaN

/* 7.1.3 문자열 연결 연산자 */

// 7-8

// 문자열 연결 연산자
"1" + 2; // '12'
1 + "2"; // '12

// 산술 연산자
1 + 2; // 3

// true는 1로 타입 변환된다.
1 + true; // 2

// false는 0으로 타입 변환된다.
1 + false; // 1

// null은 0으로 타입 변환된다.
1 + null; // 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // NaN
1 + undefined; // NaN
