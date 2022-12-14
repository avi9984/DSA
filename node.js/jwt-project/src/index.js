const express=require('express')
// const cors=require('cors');
const { default: mongoose } = require('mongoose');
const app=express();
const route=require('./routes/route')
const PORT=process.env.PORT || 8500

// var corsOptions = {
//     origin: "http://localhost:8500"
//   };
  
//   app.use(cors(corsOptions));
app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://Avi9984:JM6hnTiQIRViVdA3@cluster0.qfc4n.mongodb.net/productss",{
    useNewUrlParser:true
})
.then(()=>console.log("MongoDB is connect"))
.catch((err)=>console.log(err))
  
  // parse requests of content-type - application/json
  
  
  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

  app.use("/",route)
  app.listen(PORT,()=>{
    console.log(`Server is running on the ${PORT}`)
  })