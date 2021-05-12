const express=require("express");
const bodyParse=require("body-parser");
const mongoose=require("mongoose")

const bookRoute=require("./bookRoute");

const MONGO_URL="mongodb+srv://Laxman:laxman@project.2gxpr.mongodb.net/test"
mongoose.connect(MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})

const app=express();

app.use(bodyParse.json())
app.use('/',bookRoute);

const port=process.env.PORT||8080;

app.listen(port,function(){
    console.log("listening for requests 8000");
})  