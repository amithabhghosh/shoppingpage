import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
export const Sidebar = () => {
  return (
    <div className='AdminSidebar'>
<Link to={"/adminAddProduct"} ><h3>Add Product</h3></Link>
<Link to={"/admin"} ><h3>List Products</h3></Link>
    </div>
  )
}
