// Hollow Square Pattern

function hollowSqure(n){
    let str="";
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            if(i===1 || j===1 || i===n || j===n){
                str +=" *"
            }else {
                str +="  "
            }

        }
        str +="\n"
    }
    return str;
}
console.log(hollowSqure(8))