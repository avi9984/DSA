// Write a function that takes an integer and returns the number of 1 bits it has.

function numberOFBits_1s(num){
    let bits=num.toSting(2)
    return bits.split("").filter((x)=>x=="1").length;
}
console.log(numberOFBits_1s(11))