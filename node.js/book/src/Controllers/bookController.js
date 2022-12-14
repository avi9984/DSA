const Book=require('../Modules/bookModel')

const createBook=async function(req,res){
    let data=req.body;
    let saveData=await Book.create(data);
    res.send({msg:saveData})
}

const getBookData=async function(req, res){
    let allBook=await Book.find()
    res.send({msg:allBook})
}

module.exports={createBook,getBookData}