const express=require('express');
const path=require('path');
const app=express();
const PORT=process.env.PORT || 3000;
// const route=require('./routes/route')


app.use(express.static(path.join(__dirname,"src")))
app.use('/',require(path.join(__dirname,'routes/route.js')))

app.listen(PORT,()=>{
    console.log(`server is running on the ${PORT}`)
})