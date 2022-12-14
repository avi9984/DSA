// const mongoose=require('mongoose')
const express=require('express')
const router=express.Router()
const createList=require("../controller/taskController")

router.post('/List',createList.createList)


module.exports=router