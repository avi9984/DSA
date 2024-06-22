// Swap alternate number in the array
//[1,2,3,4,5,6,7,8]-[2,1,4,3,6,5,8,7]

function swapAlternate(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i = i + 2) {
    if (i + 1 < n) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap alternate
    }
  }
  return arr;
}
console.log(swapAlternate([1, 2, 3, 4, 5, 6, 7, 8]));
