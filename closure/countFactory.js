/**
 * 클로저로 생성 후 여러 곳 에서 접근하는
 * static 변수 만들기
 */
'use strict';

let countFactory = (function() {
  let staticCount = 0;
  return () => {
    let localCount = 0;
    return {
      increase: () => {
        return {
          static: ++staticCount,
          local: ++localCount
        };
      },
      decrease: () => {
        return {
          static: --staticCount,
          local: --localCount
        };
      }
    };
  };
}());
