const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const connectdb = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log("Bank DataBase Connected SuccessFully!...");
    }catch(err){
        console.log(err.message);
    }
}

connectdb();

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    account_no: {type:String, required:true},
    phone_number: {type:Number, required:true},
    type: {type:String, required:true},
    dob: {type:Date, required:true},
    city: {type:String, required:true},
})

const User = mongoose.model("User",userSchema,"user");

module.exports = User