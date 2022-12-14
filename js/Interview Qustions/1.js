let x=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(console.log(1))
    }, 1000);
})

async function f(){
    await x;
    console.log(2)
}
f()

let gerrt={name:"avinash",age:22}
console.log(gerrt)