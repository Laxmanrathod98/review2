const mongoose=require("mongoose")

const playerSchema=new mongoose.Schema({
    isbn:{type:Number,required:true},
    name:{type:String,required:true},
    author:{type:String,required:true},
    publisher:{type:String,required:true},
    numberOfPages:{type:Number},
})

const bookModel=mongoose.model("book",bookSchema);

module.exports=bookModel;