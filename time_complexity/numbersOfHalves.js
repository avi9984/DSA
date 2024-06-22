
function numbersOfHalves(n){
    let count=0;
    while(n>1){
        n /=2; // 40/2=20, 20/2=10, 10/2=5, 5/2=2.5, 2.5/2=1.25, 1.25/2
        count++
    }
    return count;
}
console.log(numbersOfHalves(40))  // Tc=O(log n)