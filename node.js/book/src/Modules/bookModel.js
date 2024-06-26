const mongoose =require('mongoose')

const bookSchema=new mongoose.Schema({
    bookName:String,
    authorName:String,
    tags:[String],
    isPublished:Boolean,
    date:{
        type:String,
        default:Date.now
    },
    prices:{
        indianPrice:String,
        eropPrice: String
    },
    sales:{
        type:Number,
        default:10
    }
},{timestamps:true})

module.exports=mongoose.model('Book',bookSchema)