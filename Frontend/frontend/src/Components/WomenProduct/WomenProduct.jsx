import React, { useEffect, useState } from 'react'
import { Items } from '../Items/Items'
import '../AllProducts/Allproducts.css'
import API from '../../ConnectApi'
export const WomenProduct = () => {
    const [womenProduct,setWomenProduct]=useState([])
    const fetchWomenProduct=async()=>{
        const products=await API.get("/admin/getAllProduct").then((res)=>res.data).then((data)=>data.product)
        const women=products.filter(item=>item.catagery==="Women")
        setWomenProduct(women)
    }
    useEffect(()=>{
        fetchWomenProduct()
    },[])
  return (
      <div className='allProducts'>
        <div className="allproductHeading">
            <h2>Women Products</h2>
        </div>
        <div className="productsBox">
            {womenProduct.map((item,i)=>(
                <Items name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} id={item.id} catagery={item.catagery}/>
            ))}
        </div>
        
            </div>
  )
}
