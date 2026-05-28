function numberOfService(jsonStr){
    const payments=JSON.parse(jsonStr);
    
    const maxAmount=new Map();
    
    payments.forEach(([service, amount])=>{
        if(!maxAmount.has(service)){
            maxAmount.set(service,amount)
        }else{
            maxAmount.set(service,Math.max(maxAmount.get(service),amount))
        }
    })
    let count=0;
    maxAmount.forEach(amountMax=>{
        if(amountMax<200){
            count++
        }
    })
    return count
}

const inputStr=`[["Swiggy",123],["Swiggy",227],["Zomato",103],["Zomato",171],["Dunzo",131],["Zomato",122],["Swiggy", 181]]`
console.log(numberOfService(inputStr))
