// 6-6

// 문자열 타입
var string;
string = "문자열";
string = "문자열";
string = `문자열`;
string = '작은 따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식된다.";

// 6-7

// 따옴표로 감싸지 않은 hello를 식별자로 인식한다.
var string = hello; // ReferenceError = hello is not defined
