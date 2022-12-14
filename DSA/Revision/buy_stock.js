// Best time to buy and sell stock

function buyStock(arr){
    let maxProfit=0;
    let minStockPrice=arr[0];
    for(let i=0; i<arr.length; i++){
        minStockPrice=Math.min(minStockPrice,arr[i]);
        let profit=arr[i]-minStockPrice;
        maxProfit=Math.max(maxProfit,profit);
    }
    return maxProfit
}
console.log(buyStock([3,4,5,8,9,0,10]))