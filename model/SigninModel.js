const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const url = process.env.MONGO_URL;

const connectDb = async()=>{
    try{
        await mongoose.connect(url);
        console.log("Signin DB Connected SuccessFully!..");
    }catch(err){
        console.log(err.message);
    }
}

connectDb();

const signInSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Signin = mongoose.model("Signin",signInSchema,"signin");

module.exports = Signin;