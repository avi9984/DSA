// find the sum zero in array and print it which number is indexing zero

// Brout force method
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return "no pair exit in array";
}
console.log(sumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));
console.log(sumZero([3, 3, 3, 3, 3]));

// use two pointer method

function sumPairZero(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return "there is no pair exist in array";
}
console.log(sumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));
console.log(sumPairZero([3, 3, 3, 3, 3]));
