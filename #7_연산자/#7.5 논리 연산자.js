// 7-25

// 논리합(||) 연산자
true || true; // -> true
true || false; // -> true
false || true; // -> true
false || false; // -> false

// 논리곱(&&) 연산자
true && true; // -> true
true && false; // -> false
false && true; // -> false
false && false; // -> false

// 논리 부정(!) 연산자
!true; // -> false
!false; // -> true

// 7-26

// 암묵적 타입 변환
!0; // -> true
!"Hello"; // -> false

// 7-27

//단축 평가
"Cat" && "Dog"; // -> 'Dog

// 7-28
!(x || y) === (!x && !y);
!(x && y) === (!x || !y);
