// Set is similar to an array that allows us to store multiple items like numbers, strings, objects, etc. However, unlike an array,
// a set cannot contain duplicate values.

//Create a set

const set = new Set();
// console.log(set);

// Set with multiple types of value
const set1 = new Set([1, "Avinash", { count: true }]);
// console.log(set1);
// console.log(typeof set1);

// Set with duplicate values
const set2 = new Set([1, 1, 1, 1, 2, 3, 4, 5]);
// console.log(set2);

// console.log(set2.values());

// console.log(set2.has(5));  // check element present in set or not

// adding new element in set
set2.add(6);
// console.log(set2);

// adding a duplicate value in set but not adding in set
set2.add(6);
// console.log(set2);

// deleting a element in set use delete()
set2.delete(6);
// console.log(set2);

// if removing all element in set than we use clear();
// set2.clear();
// console.log(set2);

// iterate set
//  for(let element of set2){
//     console.log(element);
//  }

// Week set
//  const set3=new Set();
//  let obj={
//     name:"ashish Kumar",
//     age:"22",
//     degination:"SQL Developer"
//  }
//  set3.add(obj);

//  console.log(set3);
//  console.log(set3.has(obj))

// Q1- Set Union Operation
function union(a, b) {
  let unionSet = new Set(a);
  for (let i of b) {
    unionSet.add(i);
  }
  return unionSet;
}
const Set_A=["apple","mango","banana","ashish"];
const Set_B=["Ankit","apple","banana","graps",1];

console.log(union(Set_A,Set_B));

// Q2-Intersection Operation

function intersection(Set_A, Set_B) {
  let intersectionSet = new Set();
  for (let i of Set_B) {
    if (Set_A.has(i)) {
      intersectionSet.add(i);
    }
  }
  return intersectionSet;
}
// const Set_A = new Set(["apple", "mango", "banana", "ashish"]);
// const Set_B = new Set(["Ankit", "apple", "banana", "graps", 1]);
// const res = intersection(Set_A, Set_B);
// console.log(res)

//  Q-Set Difference Operation

function difference(A, B) {
  let differenceSet = new Set(A);
  for (let i of B) {
    differenceSet.delete(i);
  }
  return differenceSet;
}
const A = ["CSS", "Javascript", "MongoDB", "HTML"];
const B = ["CSS", "Android", "Express", "HTML"];

let result = difference(A, B);
console.log(result);

// Q- Set Subset Operation

function subset(setA, setB) {
  for (let i of setB) {
    if (!setA.has(i)) {
      return false;
    }
  }
  return true;
}

// two sets of fruits
let setA = new Set(["apple", "mango", "orange"]);
let setB = new Set(["apple", "orange"]);

let result1 = subset(setA, setB);

console.log(result1);
