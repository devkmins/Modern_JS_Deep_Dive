// 20-2
"use strict";

function foo() {
  x = 10; // ReferenceError: x is not defined
}
foo();

// 20-3
function foo() {
  "use strict";

  x = 10; // ReferenceError: x is not defined
}
foo();

// 20-4
function foo() {
  x = 10; // 에러를 발생시키지 않는다.
  ("use strict");
}
foo();
