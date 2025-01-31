const express=require("express")
const router=express.Router()
const User=require("../models/userSchema")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
require("dotenv").config()
const jwtDecode=require("jwt-decode")



router.post("/decode",async(req,res)=>{
    const token=req.body
    try {
        const decoded = jwtDecode(token);
        res.status(200).json({message:"decoded Succesful",decoded})
    } catch (error) {
     res.status(500).json({message:error.message})   
    }
})

router.post("/register", async (req,res)=>{
    const {username,email,password}=req.body
   try {
    if(!username || !email || !password)return res.status(400).json({message:"All Fields Required"})
        
    const user=await User.findOne({email})
    if(user)return res.status(400).json({message:"User Already Exist"})
    const hashedPassword=await bcrypt.hash(password,10)
const newUser = new User({username,email,password:hashedPassword})
newUser.save()
res.status(200).json({message:"User Registerd Succesfully",newUser})
   } catch (error) {
    res.status(500).json({message:error.message})
   }
})



router.post("/login",async (req,res)=>{

    const {username,password}=req.body
    try {
        const user=await User.findOne({username})
        if(!user)res.status(400).json({message:"user not found"})
            const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch)res.status(400).json({message:"Invalid Creditnals"})
            const token = jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:"1h"})
        res.status(200).json({message:"Login Successful",token})
    } catch (error) {
        
    }
})


module.exports=router