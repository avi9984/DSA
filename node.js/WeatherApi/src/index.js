const express=require('express');
const bodyParser=require('body-parser');
const route =require("./route/router");
const mongoose=require('mongoose');
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://Avi9984:JM6hnTiQIRViVdA3@cluster0.qfc4n.mongodb.net/Weather_Api",{
    useNewUrlParser: true,
})

.then(()=>console.log("MongoDB is connecte....."))
.catch(err=>console.log(err))

app.use('/',route);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app run on port" + (process.env.PORT || 3000))
});