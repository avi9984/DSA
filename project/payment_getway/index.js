const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const ejs=require('ejs')

app.use(express.static(__dirname+'/views'));
app.engine('html',require('ejs').renderFile);
app.set("view engine", "html");
app.set("views", __dirname+ "/views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', require('./routes/route'));

const PORT=process.env.PORT|| 2000

app.listen(PORT, ()=>{
    console.log(`Server is started on ${PORT}`);
});

//ejs- embeded javascript