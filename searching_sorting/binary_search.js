function binary(arr, key) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (key > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binary([1, 2, 3, 4, 5, 6], 4)); // Tc=O(log n)
