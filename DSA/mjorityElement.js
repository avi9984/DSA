// find majority element in array

function majorityElement(arr) {
  let res = arr[0];
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (!count) {
      res = arr[i];
      count++;
      
    } else {
      
      count += arr[i] === res ? 1 : -1; 
    }
  }
  return res;
}
console.log(majorityElement([1,13,1,1,1,1]));
