const express=require("express");

const route=express.Router();

route.get("/book",async function(req,res){
    try{
        const books=await book.find();
        res.json({data:books});
    }catch(err){
        res.status().json({errMsr:err.message})
    }   
})

route.post("/book",async function(req,res){
    try{
        let book=new book();
        book.isbn=req.body.isbn;
        book.name=req.body.name;
        book.author=req.body.author;
        book.publisher=req.body.publisher;
        book.numberOfPages=req.body.numberOfPages;
        await book.save();
        req.json({message:"success",book:book})
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

route.put("/book/:isbn",async function(req,res){
    try{
        const isbn=req.params.isbn;
        await book.updateOne({_isbn:isbn},{$set:req.body})
    }
    catch(err){
        res.json({errMsg:err.message})
    }
})
module.exports=route;