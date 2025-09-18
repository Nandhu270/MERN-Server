const mongoose = require('mongoose')

const connectdb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Image Model Connected Successfully");
    }catch(err){
        console.log(err.message);
    }
}

connectdb();

const imageSchema = new mongoose.Schema({
    foodName: String,
    price: Number,
    imageUrl: String
})

const FoodImage = mongoose.model('FoodImage',imageSchema,'foodImage');

module.exports = FoodImage;