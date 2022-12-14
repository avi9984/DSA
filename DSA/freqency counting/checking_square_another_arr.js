// Checking square in another array
// arr1=[1,2,3,4] arr2=[1,4,9,16]

// condition 
// if(arr1[i]*arr1[j]===arr2[i])

function isSquareCheck(arr1,arr2){
    for(let i=0; i<arr1.length; i++){
        let isSquare=false;
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]* arr1[i]==arr2[j]){
                isSquare=true;
            }
            if(j==arr2.length-1){
                if(!isSquare){
                    return false;
                }
            }
        }
    }
    return true;
}
// console.log(isSquareCheck([1,2,3,4],[1,9,4,16])); // Tc=O(n*2) 


// condition
// arr1=[1,2,4,2] arr2=[1,4,4,16] 
//map1={1:1,2:2,4:1}
//map2={1:1,4:2,16:1}
function isSquareCheck1(arr1,arr2){
    let map1={}, map2={};

    for(let item of arr1){
        map1[item]=(map1[item] || 0)+1;
        // console.log(map1)
    }
    // console.log(map1)
    for(let item of arr2){
        map2[item]=(map2[item] || 0)+1;
    }
    // console.log(map2)
    for(let key in map1){
        // console.log(key);
        if(!map2[key * key]){ // obj keys compare in term of square
            return false;
        }
        if(map1[key] !== map2[key * key]){ // value compaire
            return false;
        }
    }
    return true;
}
console.log(isSquareCheck1([1,2,4,2],[1,4,4,16]))    