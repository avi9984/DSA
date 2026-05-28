/**
 Write a function that flatten the array without using any inbuilt method
 arr=[1, [2, [3, 4]]]
output=[1, 2, 3, 4]
 */


function flattenArr(arr, result = [], indexObj = { index: 0 }) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') { // if not object then not exicute
            flattenArr(arr[i], result, indexObj) // recorson calling
        } else {
            result[indexObj.index] = arr[i]
            indexObj.index++;
        }
    }
    return result
}

const arr = [1, [2, [3, 4]]]
console.log(flattenArr(arr))