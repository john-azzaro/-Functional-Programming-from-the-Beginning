"use strict";

//lazy execution
function repeater(count) {
  return function addBlock() {
    return "".padStart(count, "#")
  }
}

let blockItOut = repeater(8);

console.log(blockItOut()); 


// Eager execution
function repeater(count) {
  let str = "".padStart(count, "#");
  return function addBlock() {    
    return str;
  }
}

let blockItOut = repeater(8);

console.log(blockItOut());               // ########
console.log(blockItOut());               // ########   (second time same)
console.log(blockItOut());               // ########   (third time same)