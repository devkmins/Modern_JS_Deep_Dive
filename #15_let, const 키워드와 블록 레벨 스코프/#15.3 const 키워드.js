// 15.3.1 선언과 초기화

// 15-13
const foo = 1;

// 15-14
const foo; // SyntaxError

// 15-15
{
    // 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
    console.log(foo); // ReferenceError
    const foo = 1;
    console.log(foo); // 1
}

// 블록 레벨 스코프를 갖는다.
console.log(foo); // ReferenceError


// 15.3.2 재할당 금지

// 15-16
const foo = 1;
foo = 2; // TypeError


// 15.3.3 상수

// 15-17
// 세전 가격
let preTaxPrice = 100;

// 세후 가격
// 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

console.log(afterTaxPrice); // 110

// 15-18
// 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice); // 110


// 15.3.4 const 키워드와 객체

// 15-19
const person = {
    name: 'Lee',
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = 'Kim';

console.log(person); // {name: "Kim"}

