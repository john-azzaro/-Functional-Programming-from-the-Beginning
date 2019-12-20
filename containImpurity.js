"use strict";

let myArray = [1,2,3,4,5];

function addItemToArray(array, item) {
  let myArray = array;
  addAdditionalItem(item);
  return myArray;

  function addAdditionalItem(array, item) {
    return array.push(item);
  }
}

console.log(myArray);
console.log(addItemToArray(6, myArray));


