
const mongoose=require("mongoose")

const urlSchema=new mongoose.Schema({
    longUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true,
        uniqe:true
    },
    urlCode:{
        type:String,
        required:true,
        uniqe:true,
        lowerCase:true,
        trim:true
    }
},{timestamps:true})

module.exports=mongoose.model("Urls",urlSchema)