import React, { useEffect, useState } from 'react'
import './Allproducts.css'
import API from '../../ConnectApi'
import {Items} from '../Items/Items'
export const Allproducts = () => {
    const [allProducts,setAllProducts]=useState([])
   
    const fetchAllproduct=async ()=>{
        try {
            const products= await API.get("/admin/getAllProduct").then((res)=>res.data).then((data)=>data.product)
            
            setAllProducts(products) 
        } catch (error) {
            
        }

    }
    useEffect(()=>{
        fetchAllproduct()
    },[])
  return (
    <div className='allProducts'>
<div className="allproductHeading">
    <h2>All Products</h2>
</div>
<div className="productsBox">
    {allProducts.map((item,i)=>(
        <Items name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} id={item.id} catagery={item.catagery}/>
    ))}
</div>

    </div>
  )
}
