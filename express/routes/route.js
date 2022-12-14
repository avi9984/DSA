const express=require('express')
const path=require('path')
// const temp=require('../templets/index.html')
const router=express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'templets/index.html'))
})

module.exports=router
