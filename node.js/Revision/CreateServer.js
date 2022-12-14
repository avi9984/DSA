// write a nodejs program to print "Hello world" or welcome to nodejs

const http=require('http')
http.createServer((req,res)=>{
    res.end("<h1>very easy to created server in node.js</h1>")
}).listen(4000,()=>{
    console.log("Server is running on the port 4000")
})