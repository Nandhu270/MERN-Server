const mongoose = require('mongoose');

const url = process.env.MONGO_URL;

const connectdb = async()=>{
    try{
        await mongoose.connect(url);
        console.log("Nature Database is Connected SuccessFully");
    }catch(err){
        console.log(err.message);
    }
}

connectdb();

const natureSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type:String, required: true, unique: true},
    password : {type: String, required: true}
}) ;

const NatureRegister = mongoose.model("NatureRegister",natureSchema,"natureregister");

module.exports = NatureRegister