//Create get apis


const express=require('express')
const app=express();
const PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on the port is ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send({name:"Avinash",age:22})
})

app.get('/about',(req,res)=>{
    res.send("<h1>This is the about page</h1>")
})
