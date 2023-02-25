const express = require('express')
const mongoose = require("mongoose")
const app = express()
const bodyParser = require("body-parser");

const Port = 3001;

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(express.json())

app.use(express.static("public"))


mongoose.connect("mongodb://localhost:27017/newfile",{useNewUrlParser:true})

const userschema = {
    name: String,
    email: String,
    phone: Number,
    website: String
}

const User = mongoose.model("User", userschema)


app.get("/api/geti",(req,res)=>{
    User.find(function(err,foundone){
      res.send(foundone)
    })
})

app.post("/api/post",(req,res)=>{
  const userdata = new User ({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      website:req.body.website

})  
  userdata.save();
  res.send(userdata)
  console.log(userdata)
})


app.patch("/update",(req,res)=>{
    User.updateOne(
    {$set:req.body},function(err){
        if (!err){
            res.send("updated succesfully")
        } else {
            res.send(err)
        }
    })
})


app.delete("/api/delete",(req,res)=>{
    User.deleteOne({$set:req.body},function(err){
       if (!err){
        res.send("succesfully deleted")
       } else {
        res.send(err)
       }
    })  
})

app.listen(Port, (req,res)=>{
    console.log("server is running")
})