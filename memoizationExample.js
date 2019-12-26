"use strict";

function repeat(count) {
  return function hashIt() {
    return "".padStart(count, "#");
  };
}

let blockedOut = repeat(10);

console.log(blockedOut());
console.log(blockedOut());
console.log(blockedOut());