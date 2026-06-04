//Find unique element in the array 

const arr = [1, 2, 3, 4, 3, 2, 1];

function findUniqueElement(arr) {
    let unique = 0;
    for (let num of arr) {
        unique ^= num;
    }
    return unique
}
console.log(findUniqueElement(arr)); // Time complexity= O(n), space complexity= O(1)
