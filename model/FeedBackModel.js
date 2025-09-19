const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const url = process.env.MONGO_URL;

const connectDb = async()=>{
    try{
        await mongoose.connect(url);
        console.log("Feedback DB Connected SuccessFully!..");
    }catch(err){
        console.log(err.message);
    }
}

connectDb();

const feedbackSchema = new mongoose.Schema({
    name:String,
    email:String,
    city:String,
    date:Date,
    feedback:String,
    imageUrl:String 
})

const Feedback = mongoose.model("Feedback", feedbackSchema, 'feedback');

module.exports = Feedback