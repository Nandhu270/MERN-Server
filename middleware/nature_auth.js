const jwt = require('jsonwebtoken');

const secret_key = process.env.JSON_SECRET;

const verifyToken = (req,res,next)=>{
    try{
        // const auth = req.headers["authorization"];
        // const token = auth.split(" ")[1];
        const token = req.cookies.token;
        if(!token) return res.status(401).json({
            msg: "unAuthorized Access"
        })
        const decode = jwt.verify(token, secret_key);
        // req.user = decode
        next();
    }catch(err){
        res.status(404).json({
            msg: err.message
        })
    }
}

module.exports = verifyToken;