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

let tmp = increment(4);
console.log(tmp);                            // 5

tmp = triple(tmp);                           // 15
console.log(tmp);

totalProduct = baseProduct + minus2(tmp);
console.log(totalProduct);                  // 23


totalProduct2 = baseProduct + minus2(triple(increment(4)));
console.log(totalProduct2);                 // 23