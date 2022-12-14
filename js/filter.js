// filter():- filter() returns only those elements from the array which fulfill the condition.

let age=[16,17,20,30,50,55];
function checkAdult(age){
    return age>=18
}
console.log(age.filter(checkAdult))

const fruits=['Banana', 'Apple', 'Guavava', 'Kiwi', 'Chicku', 'Pine-Apple'];

let res=fruits.filter(fruits=>fruits.length>=6)
console.log(res)


