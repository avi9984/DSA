// find first and last occurance in sorted arrays

function searchFirst(nums, target) {
  let left = 0,  right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target && nums[mid-1] !==target) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function searchRange(nums, target) {
  let index = searchFirst(nums, target);
  if (index == -1) {
    return [-1, -1];
  }

  let lastIndex = index;
  while (nums[lastIndex] == target) {
    lastIndex++;
  }

  return [index, lastIndex-1];
}
console.log(searchRange([5, 7, 7, 8, 80, 10,8,15,25], 8)); // Tc=O(log n)
