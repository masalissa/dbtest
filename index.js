const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin-mohammed:Mohammed123@cluster0.c4wkhb3.mongodb.net/myDB?retryWrites=true&w=majority")
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
})
const User = mongoose.model("user",userSchema);


app.get("/", async(req,res)=>{
 
    const data = await User.find({});
    res.json(data);
    console.log(data)
    
//  res.render("home.ejs",{names:data})
//   



// newUser.save();
})
app.listen(3000,()=>{
    console.log("Server is running !")
})