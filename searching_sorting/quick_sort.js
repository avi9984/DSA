
// const swap = (arr, left, right) =>  {
//     const temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp;
//   }
const partition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
    [arr[i],arr[j]]=[arr[j],arr[i]]
      i++;
    }
  }

[arr[i],arr[high]]=[arr[high],arr[i]]
  return i;
};
// let arr1 = [10, 7, 8, 9, 1, 5];
// partition(arr1, 0, arr1.length - 1);
// console.log(arr1);

const quickSort = (arr, low, high) => {
  if (low >= high) {
    return;
  }
  const pivot = partition(arr, low, high);
  quickSort(arr, low, pivot - 1);
  quickSort(arr, pivot + 1, high);
}; // Best case=O(n logn), avg case=O(n logn), worst case=O(n^2)

let arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

