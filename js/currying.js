//Curring :- Curring is advance technique to perform a function of arguments n to n frunction of one arguments.

function add(a){
    return function(b){
        return a+b
    }
}
let c=add(3)(4)
console.log(c)