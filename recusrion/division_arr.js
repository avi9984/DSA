
function division(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 7==0) console.log("Yes")
        else console.log("No")
    }
}
console.log(division([2,3,14]))
 let ele=[]
function divisionBy7(arr){
    if(arr.length==0) return;
    else{
         ele=arr.pop();
        if(ele % 7==0) console.log("Yes") 
        else console.log("No") 
        divisionBy7(arr) ;
    }
   return ele;
}
console.log(divisionBy7([7,14,18]))