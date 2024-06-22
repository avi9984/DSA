// print the prime number of ;

function isPrime(num){
    for(let i=2; i<num; i++){
        if(num %i ==0) return `number is not prime: ${num}`
    }
    return `rumber is prime: ${num}`
}
console.log(isPrime(4))
console.log(isPrime(7))