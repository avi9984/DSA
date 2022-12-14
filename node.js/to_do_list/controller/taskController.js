const TODO=require("../models/toDoModel")

const createList=async function(req,res){
    try {
        let data=req.body;
        if(Object.keys(data).length !==0){
            let saveList=await TODO.create(data);
            res.status(201).send({msg:saveList})
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({msg:err.massage})
    }
}

// const getAllList=async function(req,res){
//     try {
        
//     } catch (err) {
        
//     }
// }

module.exports={createList}