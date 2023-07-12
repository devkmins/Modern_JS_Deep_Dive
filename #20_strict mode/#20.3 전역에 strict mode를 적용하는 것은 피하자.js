// 20-5
<!DOCTYPE html>
<html>
<body>
  <script>
    'use strict';
  </script>
  <script>
    x = 1; // 에러가 발생하지 않는다.
    console.log(x); // 1
  </script>
  <script>
    'use strict';

    y = 1; // ReferenceError: y is not defined
    console.log(y);
  </script>
</body>
</html>

// 20-6
// 즉시 실행 함수의 선두에 strict mode 적용
(function () {
    'use strict';
  
    // Do something...
  }());