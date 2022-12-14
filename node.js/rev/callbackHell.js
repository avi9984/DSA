function add(value, callback){
    return callback(value+5, false)
}

function sub(value, callback){
    return callback(value-3, false)
}
function mul(value, callback){
    return callback(value*5, false)
}

add(5, function(addRes,err){
    if(!err){
        sub(addRes, function(subRes,err){
            if(!err){
                mul(subRes, function(mulRes,err){
                    if(!err){
                        console.log("Result :",mulRes)
                    }
                })
            }
        })
    }
})