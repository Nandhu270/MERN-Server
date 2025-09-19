const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

const secret_key = process.env.JSON_SECRET

const generateToken = (user)=>{
    try{
        const token = jwt.sign({id: user._id},secret_key,{expiresIn:"8m"})
        return token
    }catch(err){
        res.status(403).json({
            msg:"Error while Creating Token"
        })
    }
}

module.exports = generateToken;