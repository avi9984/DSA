
const http=require('http')
const PORT=process.env.PORT||3000;
http.createServer((req,res)=>{
    res.end("Hello node.js")
}).listen(PORT)