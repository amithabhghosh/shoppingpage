import React from 'react'
import './OutsideNavbar.css'
import { Link } from 'react-router-dom'
export const OutsideNavbar = () => {
  return (
    <div className='outsideNavbar'>
<h1>Shoppe</h1>
<div className="buttons">
   <Link to={"/"}><button>Sign Up</button></Link> 
    <Link to={"/login"}><button>Login</button></Link>
    <Link to={"/adminlogin"}><button>Admin Panel</button></Link>
</div>
    </div>
  )
}
