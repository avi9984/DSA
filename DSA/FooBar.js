// Take a number and if number is multiple of 3 print "Foo", if number is multiple of 5 print "Bar" if number is multiple of 5 and 7 print "FooBar". If not multiple of either print "nothing"

function printNum(num){
    
    // multiple of 3
    if(num %3==0){
        console.log("Foo");
    }else if( num % 5==0 && num % 7 !==0){
        console.log("Bar")
    }else if(num %5==0 && num % 7==0){
        console.log("FooBar")
    }else{
        console.log("nothing")
    }
    
}
printNum(3)
printNum(5)
printNum(35)
printNum(11)

