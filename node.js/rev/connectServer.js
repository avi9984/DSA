const http=require('http')
http.createServer((req,res)=>{
    res.end("Server is created successfully")
}).listen(4000)