const NatureRegister = require("../model/natureModel");
const generateToken = require('../utility/natureToken');

const saveData = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await NatureRegister.findOne({ email: email });
    if (user)
      return res.status(409).json({
        msg: "User Already Exist",
      });
    const data = await NatureRegister.create(req.body);
    res.status(201).json({
        msg:"Registered successFully",
        data: data
    })
  } catch (err) {
    res.status(404).json({
      msg: err.message,
    });
  }
};

const login = async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await NatureRegister.findOne({email:email});
        if(!user) return res.status(404).json({msg: "User Not Found"})
        if(user.password !== password ) return res.status(401).json({msg: "Invalid Password"})
        const token = generateToken(user);
        res.cookie("token",token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 2*60*1000
        })
        res.status(200).json({
            msg:"Login SuccessFul",
            data: user,
            token: token
        })
    }catch(err){
        res.status(500).json({
            msg: err.msg
        })
    }
}

const getData = async(req,res)=>{
  try{
        const data = {name:"hai"}
        res.status(200).json({
          msg:"Token Verified",
          data:data
        })
    }catch(err){
        res.status(500).json({
            msg: err.msg
        })
    }
}

module.exports = {saveData, login, getData};