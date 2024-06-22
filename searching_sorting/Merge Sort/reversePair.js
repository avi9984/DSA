// Given an integer array nums, return the number of reverse pairs in the array.
// A reverse pair is a pair (i, j)
// where 0 <= i < j < nums.length and nums[i] > 2 * nums[j]

function reversePair(nums) {
  if (nums.length < 2) return 0;

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) count++;
    }
  }
  return count / 2;
}
console.log(reversePair([1, 3, 2, 3, 1]));
 