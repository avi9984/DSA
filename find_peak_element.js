function findPeakElement(num) {
  let left = 0;
  let right = num.length - 1;
  while (left !== right) {
    let mid = Math.floor((left + right) / 2);
    if (num[mid] < num[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
console.log(findPeakElement([1, 2, 3, 1]));
