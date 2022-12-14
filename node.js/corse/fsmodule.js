const fs=require('fs')

// console.log(fa )
fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data)
})

console.log("finieshed reading file")