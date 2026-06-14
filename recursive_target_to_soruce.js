/*
Problem: Write a function deepMerge(target, source) that recursively merges the properties of the source object into the target object. 
● If a property exists in both, and both values are "plain" objects, recursively merge them. 
● Arrays from the source should completely replace arrays in the target. 
● All other values (primitives, null) from source should overwrite values in target. 
● The function should mutate and return the target object. 


Sample Input:
------- 
const target = { 
a: 1, 
b: { c: 2, d: [1, 2] }, 
f: { g: 10 } 
}; 
const source = { 
a: 5, // Overwrite 
b: { d: [3, 4], e: 3 }, // Recursive merge 
f: null // Overwrite 
}; 

Sample Output (the mutated target object): 
-------- 
{ 
"a": 5, 
"b": { 
"c": 2, 
"d": [3, 4], 
"e": 3 
}, 
"f": null 
} 
*/
function helperFun(val){
    return val !==null && val ==='object' && !Array.isArray(val)
}
function deepMerge(target, source){
    for(let key in source){
        
        let targetVal=source[key];
        let sourceVal=source[key];

        if(helperFun(targetVal)&& helperFun(sourceVal)){
            deepMerge(targetVal,sourceVal)
        }else{
            target[key]=sourceVal;
        }

    }
    return target
}

const target = { 
a: 1, 
b: { c: 2, d: [1, 2] }, 
f: { g: 10 } 
}; 
const source = { 
a: 5, // Overwrite 
b: { d: [3, 4], e: 3 }, // Recursive merge 
f: null // Overwrite 
}; 

const result=deepMerge(target,source);
console.log(result);
