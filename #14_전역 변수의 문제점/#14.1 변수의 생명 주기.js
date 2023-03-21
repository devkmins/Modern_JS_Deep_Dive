// 14.1.1

// 14-1
function foo() {
  var x = "local";
  console.log(x); // local
  return x;
}

foo();
console.log(x); // ReferenceError

// 14-2
var x = "global";

function foo() {
  console.log(x);
  var x = "local";
}

foo();
console.log(x); // global
