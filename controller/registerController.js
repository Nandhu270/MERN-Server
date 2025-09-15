const Register = require("../model/RegisterModel");

const signup = async (req, res) => {
  try {
    const { email } = req.body;
    const u = await Register.findOne({ email: email });
    if (u)
      return res.status(409).json({
        msg: "User Exists",
      });
    const data = await Register.create(req.body);
    return res.status(201).json({
      msg: "Registered SuccessFully!..",
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Register.findOne({ email: email });
    if (!user)
      return res.status(404).json({
        msg: "User Not Found!...",
      });
      console.log(user);
          
    if (user.password !== password)
      return res.status(401).json({
        msg: "Invalid UserName or Password!...",
        data: data,
      });

    return res.status(200).json({
      msg: "Login Success!...",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

module.exports = { signup, login };
