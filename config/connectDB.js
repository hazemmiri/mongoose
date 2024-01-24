const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://hazemmiri1989:12345@cluster0.hmq04g4.mongodb.net/Persons');
        console.log("Database connected...")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB