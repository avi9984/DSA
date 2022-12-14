function prime(num){
    if(num<=1) return `not a prime number`
    for(let i=2; i<num; i++){
        if(num%i ==0) return `${num} is not prime number`
    }
    return `${num} is prime number`
}
console.log(prime(3))
console.log(prime(4))
console.log(prime(1))