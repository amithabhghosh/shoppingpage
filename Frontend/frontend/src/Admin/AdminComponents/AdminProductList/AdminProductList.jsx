import React, { useEffect, useState } from 'react'
import './AdminProductList.css'
import API from '../../../ConnectApi'
export const AdminProductList = () => {
const  [products,setProducts]=useState([])
    const getProduct=async ()=>{
        try {
          const response= await API.get("/admin/getAllProduct").then((res)=>res.data.product)
         setProducts(response)
          console.log("response=",response)
        } catch (error) {
          alert("Error While Fetching Product")  
        }
    }

    const cancelProduct=async (id)=>{
        try {
           await API.post("/admin/removeproduct",{id})
           setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== id)
          );
          
        } catch (error) {
           alert("Error Occured") 
        }

    }
useEffect(()=>{
    getProduct()
},[])
  return (
    <div className='adminProdcutList'>
<div className="headings">
    <p>Title</p>
    <p className='imageTitle'>Image</p>
    <p>price</p>
    <p>Cancel</p>
</div>
<hr />
<div className="productList">
 {products.map((item,i)=>(
    <div className="singleProdcut">
        <p>{item.name}</p>
        <div className='imageDiv'>
        <img src={item.image} alt="" />
        </div>
        <p>{item.new_price}Rs</p>
        <p onClick={()=>cancelProduct(item.id)}><ion-icon name="close-outline"></ion-icon></p>
    </div>
 ))}
</div>
    </div>
  )
}
