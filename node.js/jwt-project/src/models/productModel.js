const mongoose=require('mongoose')

const productModel=new mongoose.Schema({
    productName:{type:String},
    desc:{type:String},
    price:Number
})
module.exports=mongoose.model("productss",productModel)