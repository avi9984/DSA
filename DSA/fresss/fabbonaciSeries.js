function fabb(num){
    let a=0, b=1, nextNum;
    for(let i=0; i<num; i++){
        // console.log(a)
        nextNum=a+b;
        a=b;
        b=nextNum;
    }
    return nextNum;
}
console.log(fabb(5))
// let num=6
// let a=0, b=1, nextNum;
// for(let i=0; i<num; i++){
//     console.log(a);
//     nextNum=a+b;
//     a=b;
//     b=nextNum;
//     console.log(nextNum)
// }
