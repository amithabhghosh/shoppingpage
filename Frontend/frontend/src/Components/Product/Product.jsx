import React, { useEffect, useState } from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import API from '../../ConnectApi'

import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { addToCart } from '../CartAdding/cartSlicing';

export const Product = () => {
    const [userId,setUserId]=useState()
    const [product,setProduct]=useState({})
    const dispatch = useDispatch();
const token=localStorage.getItem("user_token")

   const fetchCode=()=>{
    const decoded = jwtDecode(token); // Use jwt-decode package
const userId = decoded.id;
console.log(userId)
setUserId(userId)

   }

    const {id}=useParams()
    const handleAddToCart = (productId, price) => {
        API.post(`/cart/${userId}`, { productId, quantity: 1 }).then((response) => {
          dispatch(addToCart({ productId, price, quantity: 1 }));
        });
      };


    const fetchProdut=async()=>{
const Products=await API.get("/admin/getAllProduct").then((res)=>res.data).then((data)=>data.product)
const oneProduct=Products.filter(item=>item.id==id)
setProduct(oneProduct[0])
    }
    useEffect(()=>{
        fetchProdut()
        fetchCode()
    },[{id}])
  return (
    <div className='product'>
<div className="images">
    <div className="smallImages">
<img src={product.image} alt="" />
<img src={product.image} alt="" />
<img src={product.image} alt="" />
<img src={product.image} alt="" />
    </div>
    <div className="largeImage">
    <img src={product.image} alt="" />
    </div>
</div>
<div className="productDetails">
<h2>{product.name}</h2>
<p>{product.discription}</p>
<div className="priceDetails">
    <p className='oldPrice'>{product.old_price}Rs</p>
    <p>{product.new_price}Rs</p>
</div>
<div className="sizeChart">
    <p>S</p>
    <p>M</p>
    <p>L</p>
    <p>XL</p>
    <p>XXL</p>
</div>
<p>Catagory: {product.catagery}</p>
<div className="AddtoCartbuttons">
    <button onClick={() => handleAddToCart(product._id, product.new_price)}>ADD TO CART</button>
</div>
</div>


    </div>
  )
}
