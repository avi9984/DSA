// Rest Operator(...):- Rest operators accepts infinite numbers of arguments in array

// sum of number
function sum(...numbers){
    let res=0;
    // for(let element of numbers){
    //     res +=element
    // }
    for(let i=0; i<numbers.length; i++){
        res +=numbers[i]
    }
    return res
}
console.log(sum(1,2,3,4,5,6,7))

function mul(...num){
    res=1;
    for(let i=0; i<num.length; i++){
        res *=num[i]
    }
    return res;
}
console.log(mul(1,2,3,4,5,6,7,8,9,10));

