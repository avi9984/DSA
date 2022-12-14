// let number=[1,4,9,16,25];
// let x=number.map(Math.sqrt)
// console.log(x)
// let y=x.map((e)=>{
//    return e-4;
// })
// console.log(y)

let ages=[16,17,18,20,22,29];
function checkAdult(age){
    return age >=18
}
let a=ages.filter(checkAdult)
console.log(a)