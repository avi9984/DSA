

// find min and max in array

function findMinAndMax(arr) {
  let min = arr[0], max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
console.log(findMinAndMax([1, 2, 3, 4, 5, 6, 7]));



// find min and max in array and sum of min and max
function sumOfMinMax(arr) {
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log([min, max]);
  return min + max;
}
console.log(sumOfMinMax([1, 2, 3, 4, 5]));



function minMax(arr) {
  // library function
  return [Math.min(...arr), Math.max(...arr)];
}
console.log(minMax([2, 3, 4, 5, 6, 7, 89]));
