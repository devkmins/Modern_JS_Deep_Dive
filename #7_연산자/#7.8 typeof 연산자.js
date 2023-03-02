// 7-31
typeof ""; // -> "string"
typeof 1; // -> "number"
typeof NaN; // -> "number"
typeof true; // -> "boolean"
typeof undefined; // -> "undefined"
typeof Symbol(); // -> "symbol"
typeof null; // -> "object"
typeof []; // -> "object"
typeof {}; // -> "object"
typeof new Date(); // -> "object"
typeof /test/gi; // -> "object"
typeof function () {}; // -> "function"

// 7-32
var foo = null;

typeof foo === null; // -> false
foo === null; // -> true

// 7-33

// undeclared 식별자를 선언한 적이 없다.
typeof undeclared; // -> undefined
