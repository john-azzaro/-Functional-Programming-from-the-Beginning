"use strict";

function repeat(count) {
  return memoize(function hashIt() {
    return "".padStart(count, "#");
  });
}

let blockedOut = repeat(10);

console.log()