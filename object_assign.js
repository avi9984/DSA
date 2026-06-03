/*Object store the multiple collection of data 
*/

let obj1 = {
    name: "abcd",
    age: 12
}

let obj2 = {
    name: "abcde",
    age: 123,
    add: "axs"
}

let c = Object.assign({}, obj1, obj2)

console.log(c) // { name: 'abcde', age: 123, add: 'axs' }