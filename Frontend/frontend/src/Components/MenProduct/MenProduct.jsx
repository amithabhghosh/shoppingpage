import React, { useEffect, useState } from 'react'
import '../AllProducts/Allproducts.css'
import API from '../../ConnectApi'
import { Items } from '../Items/Items'
export const MenProduct = () => {
const [menProducts,setMenProducts]=useState([])
const fetchMenProduct=async()=>{
const products=await API.get("/admin/getAllProduct").then((res)=>res.data).then((data)=>data.product)
const men=products.filter(item=>item.catagery==="Men")
console.log(men)
setMenProducts(men)
}
useEffect(()=>{
    fetchMenProduct()
},[])
  return (
      <div className='allProducts'>
    <div className="allproductHeading">
        <h2>Men Products</h2>
    </div>
    <div className="productsBox">
        {menProducts.map((item,i)=>(
            <Items name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} id={item.id} catagery={item.catagery}/>
        ))}
    </div>
    
        </div>
  )
}
