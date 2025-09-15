import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.MONGO_URL;

const connectdb = async(req,res)=>{
    try{
        await mongoose.connect(url);
        console.log("DataBase Connected SuccessFully!..");
    }catch(err){
        console.log(err.message);
    }
}

connectdb();

const movieSchema = new mongoose.Schema({
    movie_name: {type:String, required:true, unique:true}, 
    actor_name: {type:String, required:true}, 
    actress_name: {type:String, required:true}, 
    story: {type:String}
})

const Movie = mongoose.model("Movie",movieSchema,"movie");

export default Movie;