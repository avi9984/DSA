

function bubble(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let swap = false;
        for (let j = 0; j <= arr.length - 2; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true
            }
        }
        if (swap == false)
            break;
    }
    return arr;
}
console.log(bubble([3, 1, 9, 2, 5, 0, 4])) // Tc=O(n^2)