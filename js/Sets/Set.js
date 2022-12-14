// Set :- Set is most powerfull data structure check the unique values. It's perform insertion, deletion, contains

// create new set;
let set=new Set();

// insertion 
 set.add(1)// Tc=>O(1)
 set.add(2);
 set.add(3)
 set.add(3)
 console.log(set)

 // deletion
 set.delete(3)// Tc=>O(1)
 set.delete(2)
 console.log(set)

 // contains or check value is present or not
 let set1=new Set();
 set1.add(1)
 set1.has(1) // true and Tc=>O(1)
 console.log(set1)