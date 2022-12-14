// Intersection of two sets 

function insertionSets(SetA, SetB){
    let insertion=new Set(); // common element in setA and setB 
    for(let elem of SetB){
        if(SetA.has(elem)){
            insertion.add(elem)
        }
    }
    return insertion;
}

const SetA=new Set([1,2,3,4]);
const SetB=new Set([2,3]);
let set=insertionSets(SetA,SetB)
console.log(set)