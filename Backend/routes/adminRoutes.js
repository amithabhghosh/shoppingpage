const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const path=require("path")
require("dotenv").config()
const Product=require("../models/productSchema")
const multer=require("multer")
const Admin=require("../models/adminSchema")
const bcrypt=require("bcryptjs")
const port=process.env.PORT
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "mern-uploads", // Folder name on Cloudinary
    allowed_formats: ["jpg", "png", "jpeg"], // Allowed image formats
    public_id: (req, file) => file.fieldname + "_" + Date.now(), // Unique ID for each file
  },
});

const upload = multer({ storage: storage });

// Upload route to Cloudinary
router.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Get the URL of the uploaded image from Cloudinary
  const imageUrl = req.file.path; // Cloudinary returns the file URL in 'path'

  res.status(200).json({
    message: "Image uploaded successfully",
    image_url: imageUrl, // Return Cloudinary URL
  });
});

  router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
      if (!username || !password)
        return res.status(400).json({ message: "All fields are required" });
  
      const admin = await Admin.findOne({ username });
      if (admin)
        return res.status(400).json({ message: "Email already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newAdmin = new Admin({ username, password: hashedPassword });
      await newAdmin.save(); // Await the save operation
  
      return res.status(200).json({ message: "Admin created successfully", newAdmin });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const admin = await Admin.findOne({ username });
      if (!admin) 
        return res.status(400).json({ message: "User not found" });
  
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) 
        return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ id: admin._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
  
      return res.status(200).json({ message: "Admin login successful", token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });



router.post("/addproduct",async (req,res)=>{
    
    try {
      const newProductArray= await Product.find({})
      let id;
      if(newProductArray.length>0){
let last_Product_Array=newProductArray.slice(-1)
last_Product=last_Product_Array[0]
id=last_Product.id+1
      }
      else{
        id=1
      }
        const product= new Product({
          name:req.body.name,
          id:id,
          discription:req.body.discription,
          catagery:req.body.catagery,
          old_price:req.body.old_price,
          new_price:req.body.new_price,
          image:req.body.image
        })
        await product.save()
        res.status(200).json({meassage:"Product Added Succesfully",product})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})



router.post("/removeproduct",async (req,res)=>{
  try {
    await Product.findOneAndDelete({id:req.body.id})
    res.status(200).json({message:"Deleted Succesfuly"})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})



router.get("/getAllProduct",async (req,res)=>{
  try {
    const product=await Product.find()
    res.status(200).json({message:"Product Fetched",product})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

module.exports = router