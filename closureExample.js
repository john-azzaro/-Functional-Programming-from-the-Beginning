"use strict";

function counter() {
  let count = 0;
  return function increment() {
    return ++count;
  };
}

let doCount = counter();

console.log(doCount());          // 1
console.log(doCount());          // 2
console.log(doCount());          // 3
