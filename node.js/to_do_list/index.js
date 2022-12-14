const express=require('express');
const app=express()
const mongoose=require('mongoose')
const PORT=process.env.PORT||3000;

mongoose.connect("mongodb+srv://Avi9984:JM6hnTiQIRViVdA3@cluster0.qfc4n.mongodb.net/To_Do_List",{
    useNewUrlParser:true
})
.then(()=>console.log("MongoDB is connected"))
.catch((err)=>console.log(err))
app.listen(PORT,()=>{
    console.log(`server is connected in ${PORT}`)
})