import React, { useState } from 'react'
import './Addproductside.css'
import user from '../AdminImages/user.jpg'
import API from '../../../ConnectApi'
export const Addproductside = () => {
const [image,setImage]=useState()
const [productDetails,setProductDetails]=useState({
    name:"",
    discription:"",
    old_price:"",
    image:"",
    new_price:"",
    catagery:"Women"
})
const changeHandler = (e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})

}
const imageHandler = (e)=>{
setImage(e.target.files[0])
}
const addProduct=async()=>{
    let product=productDetails
    const formData = new FormData();
   await formData.append("image", image)

    try {
        const response = await API.post("/admin/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          const imageurl= await response.data.image_url
        product.image= await imageurl
   console.log(product)
const res=await API.post("/admin/addproduct",product)
alert("Product Added Succesfully")
console.log(res.data.product)
    } catch (error) {
        alert("Error Ocuured")
    }
}
  return (
    <div className='addProductSide'>
<input onChange={changeHandler} type="text" name='name' placeholder='Prodcut Title' value={productDetails.name}/>
<input onChange={changeHandler} type="text" name='discription' placeholder='Prodcut Discription' value={productDetails.discription}/>
<div className="prices">
    <input onChange={changeHandler} type="text" name='old_price' placeholder='Old Price' value={productDetails.old_price}/>
    <input onChange={changeHandler}  type="text" name='new_price' placeholder='New Price' value={productDetails.new_price}/>
</div>
<select onChange={changeHandler}  value={productDetails.catagery} name="catagery" id="" className='select'>
    <option value="Women">Women</option>
    <option value="Kid">Kid</option>
    <option value="Men">Men</option>
</select>
<div className="imageInput">
    <label htmlFor="file-input">
        <img src={image?URL.createObjectURL(image):user} alt="" />
    </label>
    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
</div>
<button onClick={addProduct}>ADD</button>
    </div>
  )
}
