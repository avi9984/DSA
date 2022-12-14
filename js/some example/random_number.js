// Generate random number between two numbers?

function randomNumber(min, max){
    let res=Math.floor(Math.random()*(max-min+1))+min;
    return res;
}
console.log(randomNumber(0,50))