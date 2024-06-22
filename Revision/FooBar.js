// Take a number and if number is multiple of 3 print "Foo", if number is multiple of 5 print "Bar" if number is multiple of 5 and 7 print "FooBar". If not multiple of either print "nothing"


function number(n){

    if(n %3 ==0){
        console.log("Foo")
    }else if(n % 5==0 && n%7 !==0){
        console.log("Bar");
    }else if(n % 5==0 && n%7==0){
        console.log("FooBar");
    }else{
        console.log("Nothing")
    }
}
number(21);
number(25);
number(35);
number(19)