"use strict";


function repeat(count) {
  let str;
  return function hashTagIt() {
    if (str == undefined) {
        str = "".padStart(count, "#");
    }
    return str;
  };
}

let blockedOut = repeat(10);

console.log(blockedOut());
console.log(blockedOut());




// memoization with utility library
// function repeat(count) {
//   return function hashIt() {
//     return "".padStart(count, "#");
//   };
// }

// let blockedOut = repeat(10);

// console.log(blockedOut());
// console.log(blockedOut());
// console.log(blockedOut());