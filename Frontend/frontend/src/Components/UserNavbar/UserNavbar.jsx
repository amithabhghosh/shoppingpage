import React from 'react'
import './UserNavbar.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const UserNavbar = () => {
    const navigate=useNavigate()
    const userLogout=()=>{
        localStorage.removeItem("user_token")
navigate("/login")
    }
    const [menuOpen, setMenuOpen] = useState(false);
    const shop=()=>{
      navigate("/home")
    }
    const Men=()=>{
      navigate("/men")
    }
    const Women=()=>{
      navigate("/women")
    }
    const kid=()=>{
      navigate("/kid")
    }
    const cart=()=>{
      navigate("/cart")
    }
    const Home=()=>{
      navigate("/home")
    }
  return (
    <div className="userNavbar">
    <h1 onClick={Home}>Shoppe</h1>
    <button
      className="menuToggle"
      onClick={() => setMenuOpen((prev) => !prev)}
    >
      ☰
    </button>
    <ul className={`navList ${menuOpen ? "active" : ""}`}>
      <li onClick={shop} >Shop</li>
      <li onClick={Men}>Men</li>
      <li onClick={Women}>Women</li>
      <li onClick={kid}>Kid</li>
      <li onClick={cart}>Cart</li>
      <li className="logoutButton" onClick={userLogout}>Logout</li>
    </ul>
    
  </div>
  )
}
