const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/BankUserRoutes");

dotenv.config();
const PORT = process.env.PORT;
const url = process.env.BANK_URL;
const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(`${url}`, router);

app.listen(PORT, () => {
  console.log("Bank Server is Running in the PORT " + PORT);
});
