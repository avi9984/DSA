

function bitwiseOperator(arr){
    let x=0;
    for(let i of arr){
        x=x^arr[i]
    }
    for(let i=1; i<arr.length+1; i++){
        x=x^i;
    }
    return x;
}
console.log(bitwiseOperator([1,2,3,4,6]))