function add(value,callback){
    return callback(value+5, false)
}

function sub(value,callback){
    return callback(value-3, false)
}

function mul(value, callback){
    return callback(value*5, false)
}

add(5, (addRes,err)=>{
    if(!err){
        sub(addRes, (subRes,err)=>{
            if(!err){
                mul(subRes, (mulRes,err)=>{
                    if(!err){
                        console.log("Result :",mulRes)
                    }
                })
            }
        })
    }
})