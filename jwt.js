const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const user = {
    id:1,
    name:"Nandha"
}

const secret_key = process.env.JSON_SECRET;

const token = jwt.sign(user, secret_key, {expiresIn: "3m"})

console.log("Token : "+token);

