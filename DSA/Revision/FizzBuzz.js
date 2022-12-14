// Given a number n,for each integer in the range from1toninclusive,print one value per line as follows:
//  •If is amultiple of both3and5,print
//    FizzBuzz.
//  •If isamultiple of3(but not5),print Fizz.
//    If isamultiple of5(but not3),print
//    Buzz.
//  •If is notamultiple of3or5,print the
//    value of

function number(n){
    for(let i=1; i<=n; i++){
        if(i%3 ==0 && i%5==0){
            console.log("FizzBuzz");
        }else if(i%3==0 && i%5 !==0){
            console.log("Fizz");
        }else if(i%3 !==0 && i%5==0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
number(100)