const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const url = process.env.MONGO_URL;

const connectdb = async(req,res)=>{
    try{
        await mongoose.connect(url);
        console.log("Register DataBase Connected SuccessFully!..");
    }catch(err){
        console.log(err.message);
    }
}

connectdb();

const registerSchema = new mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true, unique: true},
    password : {type:String, required:true, min:8},
    phone : {type:String, required:true},
    city : {type:String, required:true}
})

const Register = mongoose.model("Register", registerSchema, "register");

module.exports = Register;