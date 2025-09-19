const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config()

const secret_key = process.env.JSON_SECRET;

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.status(401).json({
        msg: "Token Not Found",
      });
    const decode = jwt.verify(token, secret_key)
    next();
  } catch (err) {
    res.status(401).json({
      msg: err.message,
    });
  }
};

module.exports = verifyToken;