// let baseProduct = 10;
 
// function minus2(x) {  
//   return x - 2;
// }
// function triple(x) {
//   return x * 3;
// }
// function increment(x) {
//   return x + 1;
// }

// // Inefficient method with tmp variable
// let tmp = increment(4);
// console.log(tmp);                            // 5

// tmp = triple(tmp);                           // 13
// console.log(tmp);

// totalProduct = baseProduct + minus2(tmp);
// console.log(totalProduct);                  // 23


// // more efficient method with nested calls
// totalProduct2 = baseProduct + minus2(triple(increment(4)));
// console.log(totalProduct2);                 // 23


// // best method with 

// function improveProduct(x) {
//   return minus2(triple(increment(4)));                          // 13
// }

// console.log(improveProduct);

// totalProduct3 = baseProduct + improveProduct;
// console.log(totalProduct3);                                      // 23

let baseProduct = 10;
 
function minus2(x) {  
  return x - 2;
}
function triple(x) {
  return x * 3;
}
function increment(x) {
  return x + 1;
}

function improveProduct(x) {
  let result = minus2(triple(increment(x)));
  return result;              
}

console.log(improveProduct(4));                                 // 13
totalProduct = baseProduct + improveProduct(4);
console.log(totalProduct);                                      // 23