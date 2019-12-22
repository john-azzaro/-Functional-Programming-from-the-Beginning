"use strict";

function flip(fn) {
  return function flipped(arg1, arg2, ...args) {
    return fn(arg2, arg1,...args);
  };
}

function f(...args) {
  return args;
}

let flipThis = flip(f);

console.log(flipThis(1,2,3,4));           // [ 2, 1, 3, 4 ]