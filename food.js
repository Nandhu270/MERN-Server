const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/customerRoutes');
dotenv.config();
const PORT = process.env.PORT;
const url = process.env.FOOD_URL;

const app = express();
app.use(bodyParser.json());
app.use(cors({origin:"http://localhost:5173"}));
app.use(`${url}`,router);

app.listen(PORT,()=>{
    console.log("Server is running in the PORT "+PORT);
})