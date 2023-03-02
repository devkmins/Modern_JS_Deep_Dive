// 7-9

var x;

x = 10;
console.log(x); // 10

x += 5;
console.log(x); // 15

x -= 5;
console.log(x); // 10

x *= 5;
console.log(x); // 50

x /= 5;
console.log(x); // 10

x %= 5;
console.log(x); // 0

var str = "My name is ";

// 문자열 연결 연산자
str += "Kim"; // str = str + 'Kim';
consolel.log(str); // 'My name is Kim'

// 7-10

var x;

// 할당문은 표현식인 문이다.
console.log((x = 10)); // 10

// 7-11

var a, b, c;

// 연쇄 할당, 오른쪽에서 왼쪽으로 진행.
a = b = c = 0;

console.log(a, b, c); // 0, 0, 0
