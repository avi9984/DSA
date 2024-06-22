
function linearSearch(arr,key){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===key){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1,2,3,4],4))

function linearSearch1(str,char){
    for(let i=0; i<str.length; i++){
        if(str[i]===char){
            return i
        }
    }
    return -1
}
console.log(linearSearch1('avinash','h'))