const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT;
const router = require('./routes/imageRoutes');
const path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api/image',router)

app.use("/uploads", express.static(path.join(__dirname,"uploads")))

app.listen(PORT,()=>{
    console.log("Server is Running in the PORT " + PORT);
})
