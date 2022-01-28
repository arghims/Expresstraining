//render html pages from express
// const express=require("express")
// const app=express()
// app.get("/home",(req,res)=>{
//     res.send({prname:"xyz"})
// })
// app.listen(3001,()=>{
//     console.log("server started")
// })

//sending query data through URL
const express=require("express")
const app=express()
app.get("/home",(req,res)=>{
    console.log(req)
    res.send("request recieved")
})
//params
app.get("/products/productsearch/:prname",(req,res)=>{
    console.log(req)
    res.send("Product searched")
})
app.post("/products",(req,res)=>{
    console.log(req)
    res.send("success")
})
app.all("*",(req,res)=>{
    res.status(404).send("File not found 404")
})
app.listen(3001,()=>{
    console.log("server started")
})