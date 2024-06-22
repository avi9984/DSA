
function knapsac(index, weights, values, target){
    let res=0;
    if(index<=-1 || target<=0){
        res=0
    }else if(weights[index]>target){
        res=knapsac(index-1, weights, values, target);
    }else{
        let current=knapsac(index-1, weights, values, target);
        let seenProduct=values[index]+knapsac(index-1, weights, values, target-weights[index]);

        res=Math.max(current,seenProduct)
    }
    return res;
}

let weights= [1,2,4,2,5];
let values= [5,3,5,3,2]
let target=10;
let k=knapsac(4,weights,values,target);
console.log(k)