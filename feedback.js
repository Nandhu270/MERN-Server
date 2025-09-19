const express = require('express')
const dotenv  = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/feedBackRoutes')
const cookieParser = require('cookie-parser')
dotenv.config()
const path = require('path')
const PORT = process.env.PORT

const app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:5173',credentials:true}))
app.use(cookieParser())
app.use('/api/feedback',router)

app.use("/feedBackUpload",express.static(path.join(__dirname,'./feedBackUpload')))

app.listen(PORT,()=>{
    console.log("Server is Running in the PORT : "+ PORT);
})