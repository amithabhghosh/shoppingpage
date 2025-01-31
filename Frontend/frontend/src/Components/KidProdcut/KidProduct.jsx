import React, { useEffect, useState } from 'react'
import '../AllProducts/Allproducts.css'
import { Items } from '../Items/Items'
import API from '../../ConnectApi'
export const KidProduct = () => {
    const [kidProduct,setKidProduct]=useState([])
    const fetchKidProduct=async()=>{
        const product=await API.get("/admin/getAllProduct").then((res)=>res.data).then((data)=>data.product)
        const kid=product.filter(item=>item.catagery==="Kid")
        setKidProduct(kid)
    }
    useEffect(()=>{
        fetchKidProduct()
    },[])
  return (
    <div className='allProducts'>
        <div className="allproductHeading">
            <h2>Kid Products</h2>
        </div>
        <div className="productsBox">
            {kidProduct.map((item,i)=>(
                <Items name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} id={item.id} catagery={item.catagery}/>
            ))}
        </div>
        
            </div>
  )
}
