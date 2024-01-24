const mongoose = require('mongoose');
const {Schema , model} = mongoose;


const personSchema = new Schema ({
    name:{type:String , required:true},
    age:{type : Number},
    favoriteFoods: { type: [String], default:[]},
  
}) 


const person= model("Persons" , personSchema)

module.exports=person