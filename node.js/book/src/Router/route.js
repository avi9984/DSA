const express=require('express');
const router=express.Router();
const Book=require('../Controllers/bookController')


router.post('/createBook',Book.createBook)
router.get('/getAllBooks',Book.getBookData)


module.exports=router;