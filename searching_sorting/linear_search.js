function lenear(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}
console.log(lenear([1, 2, 3, 4, 5], 4)) // Tc=O(n^2)