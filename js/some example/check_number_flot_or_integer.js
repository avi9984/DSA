// Check the number is float or integer

function checkNumber(x){
    if(typeof x=='number' && !isNaN(x)){
        if(Number.isInteger(x)){
            console.log(`${x} is integer`);
        }else{
            console.log(`${x} is float`);
        }
    }else{
        console.log(`${x} is NaN`)
    }
}
checkNumber('hello');
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);

// Example 2: Using Regex

function checkNumber1(x){
    let Regex=/^-?[0-9]+$/;
    let res=Regex.test(x);
    if(res){
        console.log(`${x} is integer`);
    }else{
        console.log(`${x} is float`);
    }
}


checkNumber1(44);
checkNumber1(3.4);
checkNumber1(-3.4);