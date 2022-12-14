// write a function to print the factorial of number

function factorial(num){
    
    if(num===1) return 1;
    return num *factorial(num-1)
}
console.log(factorial(5))

function fact(num){
    let countSum=1;
    for(let i=1; i<=num; i++){
        countSum *=i
    }
    return countSum
}
console.log(fact(5))
