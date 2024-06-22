
function addUpToFirst(n){
  let sum=0;
  for(let i=1; i<=n; i++){
    sum +=i
  }
  return sum
}
console.log(addUpToFirst(10)) // Tc =O(n)

function addUpToSecond(n){
    return n*(n+1)/2
}
console.log(addUpToSecond(100)) // Tc=O(1)