

function magicalOdd(arr) {
    let checkOdd = (number) => {
        return number % 2 == 0
    }

    let min = Infinity,
        max = -Infinity;
    
    for(let val of arr){
        if(max < val) max = val;
        if(!checkOdd(val)){
            if(min > val) min = val
        }
    }

    if(min == Infinity || max == Infinity) return false
    if(checkOdd(max)) return false
    
    for(let val of arr){
        if(checkOdd(val)){
            if(min < val) return false
        }
    }
    return true
}

console.log(magicalOdd([15]))