//Find a unique number 2

let unique=[1,2,3,4,5,3,2,1];

function uniqueNumber2(arr){
    let xor_all=0;
    for(let num of arr){
        xor_all ^=num;
    }
    let mask= xor_all & -xor_all;
    let first_unique=0;
    let second_unique=0;

    for(let num of arr){
        if(num & mask){
            first_unique ^=num;
        }else{
            second_unique ^=num;
        }
    }
    return first_unique <second_unique?[first_unique,second_unique]:[second_unique,first_unique];

}
console.log(uniqueNumber2(unique));
