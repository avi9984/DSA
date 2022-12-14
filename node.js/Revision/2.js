
    function fact(num){
        if(num==1) return 1
        return num * fact(num-1)
    }


let x=new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve( console.log(fact(5)))
    }, 1000);
})
async function fun(){
    await x;
    console.log("abc")
}
fun()