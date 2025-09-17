const jwt = require('jsonwebtoken');

const secret_key = process.env.JSON_SECRET;

const verifyToken = (req,res,next)=>{
    try{
        const authheader = req.headers["authorization"];
        const token = authheader.split(" ")[1];
        if(!token) 
            return res.status(401).json({msg:"Access Denied..."});
        const decode = jwt.verify(token, secret_key);
        req.user = decode;
        next();
    }catch(err){
        res.status(401).json({
            msg:err.message
        })
    }
}

module.exports = verifyToken; 