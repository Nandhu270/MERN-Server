const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secret_key = process.env.JSON_SECRET;

const verifyToken = (req,res,next)=>{
    const verify = req.headers["authorization"];
    const t = verify && verify.split(" ")[1];
    if(!t){
        return res.status(401).json({
            msg:"UnAuthorized Access"
        })
    }
    try{
        const decode = jwt.verify(t, secret_key);
        req.user = decode
        next();
    }catch(err){
        res.json({
            msg:err.message,
        })
    }
}

module.exports = verifyToken;