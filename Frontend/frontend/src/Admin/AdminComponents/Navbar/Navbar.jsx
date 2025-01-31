import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
export const Navbar = () => {
  const navigate=useNavigate()
const adminLogout=()=>{
  localStorage.removeItem("admin_token")
  navigate("/adminlogin")
}
  return (
    <div className='adminNavbar'>
<div className="adminHeading">
    <h1>Shoppe Admin</h1>
</div>
<button onClick={adminLogout}>Logout</button>
    </div>
  )
}
