const express=require('express')
const app=express();
const PORT=3000;

app.listen(PORT, ()=>{
    console.log(`server is running on the port of ${PORT}`)
})

app.get("/",(req,res)=>{
   res.send({name:"avinash",age:22, dest:"Backend developer"}) 
})
