// Count distinct pair with given sum

function countDistinctPairSum(arr, sum) {
  let elemSet = new Set();
  let seenSet = new Set();
  let count = 0;
  for (let currValue of arr) {
    let nextValue = sum - currValue;
    // count++;
    if (elemSet.has(nextValue) && !seenSet.has(currValue)) {
      seenSet.add(currValue);
      seenSet.add(nextValue);
      count++;
    }
    elemSet.add(currValue);
  }
  return count;
}
console.log(countDistinctPairSum([1, 4, 4, 1, 2, 3, 3, 2, 5, 0], 5));
