let basePrice = 10;

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
console.log(tmp);                        // 5

tmp = triple(tmp);                       // 15
console.log(tmp);

totalCost = basePrice + minus2(tmp);
console.log(totalCost);                  // 23

