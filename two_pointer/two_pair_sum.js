// find the sum of the given arrays

// Brout force method
function sum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        console.log("pair exist")
        return [arr[i], arr[j]];
      }
    }
  }
  return "no pair exist in arrays";
}
console.log(sum([-1, -2, 4, 5], 9 ));

// use two pointer method
function twoPairSum(arr, sum) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] == sum) {
      console.log("pair exist")
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] > sum) {
      j--;
    } else {
      i++;
    }
  }
  return "no pair exist in arrays";
}
console.log(twoPairSum([-1, -2, 4, 5], 3));
