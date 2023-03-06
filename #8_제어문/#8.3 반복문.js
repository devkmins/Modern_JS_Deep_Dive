// 8.3.1

// 8-10
for (var i = 0; i < 2; i++) {
  console.log(i);
}

// 8-11
for (var i = 1; i >= 0; i--) {
  console.log(i);
}

// 8-12
// 무한루프

// 8-13
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}

// 8.3.2

// 8-14
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count); // 0 1 2
  count++;
}

// 8-15
// 무한루프

// 8-16
var count = 0;

// 무한루프
while (true) {
  console.log(count);
  count++;
  // count가 3이면 코드 불록을 탈출한다.
  if (count === 3) break;
} // 0 1 2

// 8-17
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count); // 0 1 2
  count++;
} while (count < 3);
