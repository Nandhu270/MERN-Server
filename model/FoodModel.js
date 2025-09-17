const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.MONGO_URL;

const connectDB = async()=>{
    try{
        await mongoose.connect(url);
        console.log("Food DB Connected Successfully!..");
    }catch(err){
        console.log(err.message);
    }
}

connectDB();

const foodSchema = new mongoose.Schema({
    name : {type:String, required: true, unique: true},
    price : {type: Number, required: true},
})

const Food = mongoose.model("CustomerFood",foodSchema,"customerfood");

module.exports = Food;