const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secret_key = process.env.JSON_SECRET;

const generateToken = (user)=>{
    const token = jwt.sign({id: user._id}, secret_key, {expiresIn: "2m"});
    return token;
}

module.exports = generateToken;