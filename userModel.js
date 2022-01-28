const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://himanshiagrawal:himanshi123!@cluster0.4fwbf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true})

const user = mongoose.model("publications", {
    author: String,
    password: String,
    userName: String
})
const user1 = new user({
    author: "authorABC",
    password: "pass123",
    userName: "testauthor"
})
user1.save().then(() => console.log("User added successfully!!!"))