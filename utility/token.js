const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();

const generateToken = (user)=>{
    const token = jwt.sign({rollNo:user.rollNo},process.env.JSON_SECRET, {expiresIn:"1m"});
    return token;
}

module.exports = generateToken;