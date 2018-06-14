'use strict';

function outer() {
  let count = 0;
  return {
    increase() {
      return ++count;
    },
    decrease() {
      return --count;
    }
  };
}
