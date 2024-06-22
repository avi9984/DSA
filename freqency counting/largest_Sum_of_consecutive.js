// find largest sum of consecutive digit in the array
//[1,2,3,4,3,5,4,6,7,8] ,w=4

function findLargestSum(arr,w){
    if(w>arr){
        console.log("W is not greater then arr")
    }else{
        let max=0;
        for(let i=0; i<arr.length-w+1; i++){
            let temp=0;
            for(let j=0; j<w; j++){
                temp +=arr[i+j];
            }
            if(temp>max){
                max=temp;
            }
        }

        return max;
    }
}
console.log(findLargestSum([1,2,3,4,3,5,4,6,7,8],4))

