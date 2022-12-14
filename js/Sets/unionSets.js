// Union of two or more sets

function unionSets(SetA,SetB){
    let union=new Set(SetA);
    for(let elem of SetB){
        union.add(elem)
    }
    return union;
}
const SetA=new Set([1,2,3,4]);
const SetB=new Set([4,5,6]);
const SetC=new Set([7])
let set=unionSets(SetA,SetB);
console.log(set)
set=unionSets(SetA,SetC)
console.log(set)