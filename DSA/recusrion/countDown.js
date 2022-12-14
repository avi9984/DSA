function countDown(count){
    if(count<0) return;

    console.log(count)
    count--;
    countDown(count)
    
}
countDown(9)