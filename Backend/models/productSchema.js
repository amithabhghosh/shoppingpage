const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    name:{type:String,require:true},
    discription:{type:String},
    catagery:{type:String,required:true},
old_price:{type:Number,required:true},
new_price:{type:Number,required:true},
image:{ type: String, required: true }
})
module.exports=mongoose.model("product",productSchema)