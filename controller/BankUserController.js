const User = require('../model/BankUserModel')

const createUser = async(req,res)=>{
    try{

        const data = await User.findOne({email:req.body.email});

        if(data) return res.status(409).json({
            msg:"User Already Exist"
        })

        const user = await User.create(req.body);

        return res.status(201).json({
            msg:"User Created SuccessFully",
            data:user
        })

    }catch(err){
        return res.status(400).json({
            msg:"User Not Created"
        })
    }
}

const getUser = async(req,res)=>{
    try{
        const user = await User.find();
        return res.status(200).json({
            msg:"User Data Fetched SuccessFully",
            data:user
        })
    }catch(err){
        return res.status(404).json({
            msg:"Error While Fetching Data"
        })
    }
}

module.exports = {createUser, getUser}