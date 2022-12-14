const express=require('express');
const bodyParser=require('body-parser');
const route=require('./Router/route')
const mongoose=require('mongoose');

const app=express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://Avi9984:JM6hnTiQIRViVdA3@cluster0.qfc4n.mongodb.net/Book_APIs",{
    useNewUrlParser:true

})
.then(()=>console.log("MongoDB is Connected..."))
.catch((err)=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 3000, function(){
    console.log("Express on running port"+ (process.env.PORT || 3000))
})