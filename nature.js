const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieparser = require('cookie-parser');
dotenv.config();
const router = require("./routes/natureRoutes");
const PORT = process.env.PORT;
const url = process.env.NATURE_URL;

const app = express();
app.use(bodyParser.json());
app.use(cookieparser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(`${url}`, router);

app.listen(PORT, () => {
  console.log("Server is Running in the PORT ", PORT);
});
