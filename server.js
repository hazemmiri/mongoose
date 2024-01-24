const express = require("express");

const connectDB = require("./config/connectDB")

const person = require("./Model/personModel")

const app = express ();


connectDB();

// app.get("/",(req,res)=>{
//     res.send("hello miri!")
// })

const createPersonDOC =async()=>{
    const doc = new person({name:"hazem", age:24 , favoriteFoods:['spagetti','mlaoui','nutella']});

    await doc.save();
    console.log("new person :" , doc)
}
createPersonDOC()





const PORT = 5004;

app.listen(PORT,(err)=>
err? console.log(err):
console.log(`server is running on port ${PORT}`))