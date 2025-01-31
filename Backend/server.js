const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
require('dotenv').config();
const userRoute=require("./routes/userRoutes")
const adminRoute=require("./routes/adminRoutes")
const cartRoute=require("./routes/cartRoutes")

app.use(bodyParser.json());
app.use(cors());

app.use(cors({
  origin: "https://fontend-shoppingpage.vercel.app", // Allow your frontend's origin
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all necessary methods
 credentials:true
}));

app.get("/",(req,res)=>{
  res.send("Hello World")
})




app.use("/images",express.static("uploads/images"))
app.use("/",userRoute)
app.use("/admin",adminRoute)
app.use("/cart",cartRoute)



  const PORT = process.env.PORT || 5000;


  mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("mongodb Connected Succesfully"))
.catch((err)=>console.log("error with connecting mongodb",err))

app.listen(PORT,()=>{
    console.log(`server connected succesfully ${PORT}`)
})
