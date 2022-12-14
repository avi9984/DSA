const express=require('express')
const router=express.Router();
const Tracker=require('../controller/covidController');

router.get('/covid-19/case',Tracker.getCovidApi)

module.exports=router;