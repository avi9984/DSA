
// find the only non-repeating element in an array where every element repetes twice. arr=[5,4,1,4,3,5,1]

function non_repeting_element(arr){
    let res=0;
    for(let i=0; i<arr.length; i++){
        res=res^arr[i] // xor krne pr same element zero ho jate hai difference wale 1
    }
    return res;
}
console.log(non_repeting_element([5,4,1,4,3,5,1]))// ans-3

function repeating_twise(arr){
    let res=0;
    for(let i=0; i<arr.length; i++){
        res=res^arr[i];
    }
    return res;
}
console.log(repeating_twise([5,4,1,4,3,5,1,2]))// ans-1