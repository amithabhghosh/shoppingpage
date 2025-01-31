 import React from 'react'
import './Cart.css'
import API from '../../ConnectApi'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { setCart, removeFromCart } from '../CartAdding/cartSlicing';
import { jwtDecode } from "jwt-decode";
import { useSelector } from 'react-redux'

export const Cart = () => {
    const dispatch = useDispatch();
     const [userId,setUserId]=useState("")
    const { items, totalPrice } = useSelector((state) => state.cart);
   
    const token=localStorage.getItem("user_token")
       const fetchCode=()=>{
        const decoded = jwtDecode(token); // Use jwt-decode package
    const userId = decoded.id;
   
    setUserId(userId)
       }

     const fetchCart=async()=>{
      API.get(`/cart/${userId}`).then(response=>{
        dispatch(setCart(response.data))
      })
   
     }
  
    useEffect(()=>{
      fetchCode()
      fetchCart()
    })
       
  
    const handleRemoveFromCart = (productId) => {
        API.delete(`/cart/${userId}/${productId}`).then(() => {
          dispatch(removeFromCart(productId));
        });
      };
  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      <div className="cartHead">
        <p>Image</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Cancel</p>
      </div>
      <hr />
      <div className="cardbody">

   
      <div className="cartList">
        {items.length>0?(
          items.map(item=>(
            <div className="cartOne">
<img src={item.productId.image} alt="" />
<h3>{item.productId.name}</h3>
<p>{item.quantity}</p>
<p>{item.productId.new_price} Rs</p>
<button onClick={() => handleRemoveFromCart(item.productId._id)}>Remove</button>
            </div>
          )
        )
        
        ):(

          <p className='empty'> Your Cart is Empty</p>
        )}
      </div>
      </div>
      <h3 className='totalPrice'>Total Cart Price :{totalPrice} Rs</h3>
    </div>
  )
} 