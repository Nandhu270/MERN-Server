const Signin = require("../model/SigninModel");
const Feedback = require("../model/FeedBackModel");
const generateToken = require("../utility/feedbackToken");

const signin = async (req, res) => {
  try {
    const { email } = req.body;
    const isExist = await Signin.findOne({ email: email });
    if (isExist)
      return res.status(409).json({
        msg: "User Already Exists",
      });
    const user = await Signin.create(req.body);
    res.status(201).json({
      msg: "User Created SuccessFully",
      data: user,
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
    const user = await Signin.findOne({ email: email });
    if (!user) return res.status(404).json({ msg: "User Not Found" });
    if (user.password !== password)
      return res.status(401).json({ msg: "Invalid Password" });
    const token = generateToken(user);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 15 * 60 * 1000,
    });
    res.status(200).json({
      msg: "Login Success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const saveFeedBack = async (req, res) => {
  try {
    const { name, email, city, date, feedback } = req.body;
    const imageUrl = `/feedBackUpload/${req.file.filename}`;
    const data = await Feedback.create({
      name,
      email,
      city,
      date,
      feedback,
      imageUrl,
    });
    res.status(201).json({
      msg: "FeedBack Submitted SuccessFully",
      data: data,
    });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

const getData = async (req, res) => {
  try {
    const data = await Feedback.find()
    res.status(201).json({
      msg: "Data Fetched SuccessFully",
      data: data,
    });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

module.exports = { signin, login, saveFeedBack, getData };
