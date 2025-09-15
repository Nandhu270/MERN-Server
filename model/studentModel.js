const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()

const url = process.env.MONGO_URL;

const connectdb = async(req,res)=>{
    try{
        await mongoose.connect(url);
        console.log("Student DataBase Connected SuccessFully!..");
    }catch(err){
        console.log(err.message);
    }
}

connectdb();

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dept: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema, "student");

module.exports = Student;
