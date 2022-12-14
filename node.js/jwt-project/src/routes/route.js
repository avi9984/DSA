const express=require('express')
const router=express.Router();
const product=require('../controller/productController')

router.post("/product/add",product.addProduct)

module.exports=router;