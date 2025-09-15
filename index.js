const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const router = require('./routes/studentRoutes');
// const router = require('./routes/registerRoutes');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT;
const COMMON_URL = process.env.COMMON_URL;

const app = express();
app.use(bodyParser.json());

app.use(cors({origin:'http://localhost:5173'}))

app.use(`${COMMON_URL}`,router)

app.listen(PORT, () => {
  console.log(`Server Started Successfully in the ${PORT} !....`);
});
