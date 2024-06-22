// Find elements which occur more than once in the list :  
// [2,4,5,2,4,7,12,7,9,22,11,4,6,7]

function findOccurance(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }
    for (let i in map) {
        if (map[i] > 1) {
            console.log(i)
        }
    }
    return " "
}
console.log(findOccurance([2, 4, 5, 2, 4, 7, 12, 7, 9, 22, 11, 4, 6, 7]))

