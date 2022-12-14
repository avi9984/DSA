// Example 1: Using a Temporary Variable
function swap(a,b){
    a=a^b;
    b=a^b;
    a=a^b
    return [a,b]
}
console.log(swap(10,20))

