import React, { useEffect, useState } from 'react'
import './RelatedProduct.css'
import { useParams } from 'react-router-dom'
import API from '../../ConnectApi'
import { Items } from '../Items/Items'
export const RelatedProduct = () => {
    const {id}=useParams()
const [relatedProduct,setRelatedProduct]=useState([])
const fetchRelatedProduct=async()=>{
const products=await API.get("/admin/getAllProduct").then((res)=>res.data).then((data)=>data.product)
const particularProduct=products.filter(item=>item.id==id)
const catagery=particularProduct[0].catagery
const catageryProduct=products.filter(item=>item.catagery===catagery)
const relateProduct=catageryProduct.filter(item=>item.id!=id)
console.log(relateProduct)
setRelatedProduct(relateProduct)
}
useEffect(()=>{
    fetchRelatedProduct()
},[{id}])
  return (
    <div className='relatedProduct'>
        <h2>Related Products</h2>
<div className="related">
{relatedProduct.map((item,i)=>(
   <Items name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} id={item.id} catagery={item.catagery}/>
))}
</div>
    </div>
  )
}
