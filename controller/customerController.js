const Customer = require("../model/CustomerSchema");
const generateToken = require("../utility/customerToken");
const Food = require("../model/FoodModel");

const register = async (req, res) => {
  try {
    const { email } = req.body;
    const isExist = await Customer.findOne({ email: email });
    if (isExist)
      return res.status(409).json({
        msg: "User Already Exist",
      });
    const data = await Customer.create(req.body);
    return res.status(201).json({
      msg: "Customer Created SuccessFully",
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      msg: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Customer.findOne({ email: email });
    if (!user)
      return res.status(404).json({
        msg: "User Not Found",
      });
    if (user.password !== password)
      return res.status(401).json({
        msg: "Invalid Password",
      });

    const token = generateToken(user);

    res.status(200).json({
      msg: "Login SuccessFull!..",
      data: user,
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      msg: err.message,
    });
  }
};

const saveFood = async (req, res) => {
  try {
    const data = await Food.create(req.body);
    res.status(201).json({
      msg: "Food Stored SuccessFully",
      data: data,
      decode: req.user,
    });
  } catch (err) {
    res.status(404).json({
      msg: err.message,
    });
  }
};

const getData = async (req, res) => {
  try {
    const data = await Food.find();
    res.status(201).json({
      msg: "Food Stored SuccessFully",
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      msg: err.message,
    });
  }
};

const filterData = async (req, res) => {
  try {
    const searchdata = req.query.search;
    const search = new RegExp(searchdata, "i");
    const data = await Food.find({ name: search });
    res.status(200).json({
      message: "Data Fetched SuccessFully!...",
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      msg: err.message,
    });
  }
};

module.exports = { register, login, saveFood, getData, filterData };
