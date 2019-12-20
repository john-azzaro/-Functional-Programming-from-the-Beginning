"use strict";

let books = [
  { id: 1, title: "Fixing Old Cars"},
  { id: 2, title: "Selling New SUVs"},
  { id: 3, title: "Buying New Sports Cars"},
];

function sortBooksByName() {
  books.sort(function byTitle( title1, title2) {
    if (title1.title < title2.title) {
      return -1;
    } else if (title1.title > title2.title) {
      return 1;
    }
  });
  return books;
}

console.log(sortBooksByName());






















// let myArray = [1,2,3,4,5];

// function addItemToArray(array, item) {
//   let myArray = array;
//   addAdditionalItem(item);
//   return myArray;

//   function addAdditionalItem(array, item) {
//     return array.push(item);
//   }
// }

// console.log(myArray);
// console.log(addItemToArray(6, myArray));


