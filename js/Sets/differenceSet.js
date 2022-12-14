// Difference of two sets

function differenceSets(SetA, SetB){
    let difference=new Set(SetA);
    for(let elem of SetB){
        difference.delete(elem)
    }
    return difference;
}
const SetA=new Set([1,2,3,4])
const SetB=new Set([2,3,5,6,7])
const set=differenceSets(SetA,SetB);
console.log(set)