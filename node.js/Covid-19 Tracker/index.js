const express=require('express');
const bodyParser=require('body-parser');
const route=require('./src/route/router');
const PORT=3000
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',route);
app.listen(PORT,()=>{
    console.log(`Server is running on the ${PORT}`);
})

