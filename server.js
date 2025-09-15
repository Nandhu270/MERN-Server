import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import router from './routes/MovieRoutes.js';

dotenv.config();
const PORT = process.env.PORT;
const COMMON_URL = process.env.COMMON_URL;

const app = express()

app.use(bodyParser.json());

app.use(`${COMMON_URL}`,router)

app.listen(PORT,()=>{
    console.log(`Server is Running ${PORT}!..`);
})


