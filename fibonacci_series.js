function fibbonaci(num) {
  let a = 0,
    b = 1,
    nextNum;
  for (let i = 0; i <= num; i++) {
    console.log(a);
    nextNum = a + b;
    a = b;
    b = nextNum;
  }
  // return nextNum;
  //   return a;
  //   return
}
// console.log(fibbonaci(5));
// // 0+1+1+2+4+5

function fabb(num) {
  if (num < 2) return num;
  return fabb(num - 1) + fabb(num - 2)
}
console.log(fabb(6))
