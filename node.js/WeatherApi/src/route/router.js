const express=require("express");
const router=express.Router();

const temp=require("../controller/tempControler");

router.get("/getWeather",temp.getLondonWeather);
router.get("/getWeatherCities",temp.getSortedCities)

module.exports= router;