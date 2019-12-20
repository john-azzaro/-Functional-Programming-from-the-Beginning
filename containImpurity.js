"use strict";

let books = [
  { id: 1, title: "Fixing Old Cars"},
  { id: 2, title: "Selling New SUVs"},
  { id: 3, title: "Buying New Sports Cars"},
];

function getBooksByName(books) { 
  books = books.slice();                              // local copy of "books".
  return sortBooksByName();                              // call sortsBookByName.

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
}

console.log(getBooksByName(books));                  /* [ { id: 3, title: 'Buying New Sports Cars' },
                                                          { id: 1, title: 'Fixing Old Cars' },
                                                          { id: 2, title: 'Selling New SUVs' } ]*/

console.log(books);                                  /* [ { id: 1, title: 'Fixing Old Cars' },
                                                          { id: 2, title: 'Selling New SUVs' },
                                                          { id: 3, title: 'Buying New Sports Cars' } ]*/







// function sortBooksByName() {
//   books.sort(function byTitle( title1, title2) {
//     if (title1.title < title2.title) {
//       return -1;
//     } else if (title1.title > title2.title) {
//       return 1;
//     }
//   });
//   return books;
// }

// console.log(sortBooksByName());   /* [  { id: 3, title: 'Buying New Sports Cars' },
//                                         { id: 1, title: 'Fixing Old Cars' },
//                                         { id: 2, title: 'Selling New SUVs' } ]       */



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


