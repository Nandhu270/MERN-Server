const Student = require("../model/studentModel");

const generateToken = require('../utility/token')

const saveData = async (req, res) => {
  try {
    const s = new Student(req.body);
    const r = await s.save();
    res.status(200).json({
      message: "Student Created SuccessFully!...",
      data: r,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const saveManyData = async (req, res) => {
  try {
    const s = await Student.insertMany(req.body);
    res.status(200).json({
      message: "Student Created SuccessFully!...",
      data: s,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getData = async (req, res) => {
  try {
    const data = await Student.find();
    res.status(200).json({
      message: "Data Retrieved SuccessFully!...",
      data: data,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getDataByRoll = async (req, res) => {
  try {
    const data = await Student.findOne({ rollNo: req.params.rollNo });
    res.status(200).json({
      message: "Data Retrieved SuccessFully!...",
      data: data,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const updateData = async (req, res) => {
  try {
    const data = await Student.findOneAndUpdate(
      { rollNo: req.params.rollNo },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      message: "Data Updated SuccessFully!...",
      data: data,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deleteData = async (req, res) => {
  try {
    const data = await Student.findOneAndDelete({ rollNo: req.params.rollNo });
    res.status(200).json({
      message: "Data Deleted SuccessFully!...",
      data: data,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const filterData = async (req, res) => {
  try {
    const searchdata = req.query.name;
    const r = new RegExp(searchdata, "i"); // RegExp(searching data , case insensitive)
    const data = await Student.find({ name: r });
    res.status(200).json({
      message: "Data Fetched SuccessFully!...",
      data: data,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


//JWT TOKEN
const logindata = (req,res)=>{
  try{
    const user = {
      rollNo : "F223",
      name: "nk",
      dept: "IT" 
    }

    const t = generateToken(user);
    res.status(200).json({
      msg:"Token Created",
      token:t,
      user:user
    })

  }catch(err){
    console.log(err.message);
  }
}

const verify = async(req,res)=>{
  try{

    return res.status(200).json({msg:"Allow"});

  }catch(err){
    res.status(404).json({
      msg : err.message
    })
  }
}

module.exports = {
  saveData,
  getData,
  getDataByRoll,
  updateData,
  deleteData,
  saveManyData,
  filterData,
  logindata,
  verify,
};
