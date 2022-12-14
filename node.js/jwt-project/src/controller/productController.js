
const product=require('../models/productModel')

const addProduct=async(req,res)=>{
    try {
    let data=req.body;

    let newProduct=await product.create(data);
    res.json({msg:"add product",data:newProduct})

    } catch (error) {
        console.log(error)
    }
}

const getAllProudct=async (req,res)=>{
    try {
        let getproduct=await product.find();
        res.status(200).json({status:false,msg:"get all products",data:getproduct})
    } catch (error) {
        console.log(error)
    }
}
module.exports={addProduct,getAllProudct}