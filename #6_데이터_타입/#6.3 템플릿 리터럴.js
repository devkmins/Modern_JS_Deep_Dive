// 6-8
var template = `Template literal`;
console.log(template);


/* 6.3.1 멀티라인 문자열 */

// 6-9
var str = 'Hello
world.';
// SyntaxError: Invalid or unexpected token


// 6-10
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';

console.log(template);


// 6-11
var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;

console.log(template)


/* 6.3.2 표현식 삽입 */

// 6-12
var first = 'ms';
var last = 'dev';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');


// 6-13
var first = 'ms';
var last = 'dev';

// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`);


// 6-14
console.log(`1 + 2 = ${1 + 2}`);


// 6-15
console.log('1 + 2 = ${1 + 2}');