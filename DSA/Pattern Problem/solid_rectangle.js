
// 1. Square or solid Star Pattern in Javascript
function squreRectengle(n){
    let str="";
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            str +=" *"
        }
        str +="\n"
    }
    return str
}
console.log(squreRectengle("4"))