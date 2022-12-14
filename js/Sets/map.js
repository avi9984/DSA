let num=[1,4,9,16,25,36];
let x=num.map(Math.sqrt,(e)=>{
    e+2
});
console.log(x);
let z=num.map((e)=>{
   return e+2
})
console.log(z)


let a=num.reduce((it,acc)=>it+acc,0)
console.log(a)