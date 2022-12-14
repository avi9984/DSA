function countUpAndDown(n){
    console.warn("Going Up !")
    for(let i=0; i<=n; i++){
        console.log(i)
    }
    console.log("At the Top!\ n going down")
    for(let j=n-1; j>=0; j--){
        console.log(j)
    }
    console.log("Back down! Bye")

}
console.log(countUpAndDown(10)) // Tc=O(n)