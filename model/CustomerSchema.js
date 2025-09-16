const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.MONGO_URL;

const connectDB = async()=>{
    try{
        await mongoose.connect(url);
        console.log("Restaurant DB Connected Successfully!..");
    }catch(err){
        console.log(err.message);
    }
}

connectDB();

const customerSchema = new mongoose.Schema({
    username : {type:String, required: true},
    email : {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const Customer = mongoose.model("Customer",customerSchema,"customer");

module.exports = Customer;