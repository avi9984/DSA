// Checking square in another array
// arr1=[1,2,3,4] arr2=[1,4,9,16]

// condition 
// if(arr1[i]*arr1[i]===arr2[j])

function square(arr1,arr2){
    for(let i=0; i<arr1.length; i++){
        let isSquare=false;
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] * arr1[i]==arr2[j]){
                isSquare=true
            }
            if(j==arr2.length-1){
                if(!isSquare){
                    return false
                }
            }
        }
    }
    return true;
}
console.log(square([1,2,4,3],[1,4,9,16]))