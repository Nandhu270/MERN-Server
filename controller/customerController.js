const Customer = require("../model/CustomerSchema");
const generateToken = require("../utility/customerToken");

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
      token: token
    });
  } catch (err) {
    res.status(500).json({
      msg: err.message,
    });
  }
};

module.exports = { register, login };
