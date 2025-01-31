import React from 'react'
import { Navbar } from '../../Admin/AdminComponents/Navbar/Navbar'
import { Sidebar } from '../../Admin/AdminComponents/Sidebar/Sidebar'
import { Addproductside } from '../../Admin/AdminComponents/AddproductSide/Addproductside'
import '../AdminCss/AdminAddProduct.css'
export const AdminAddProduct = () => {
  return (
    <div>
        <Navbar/>
        <div className="adminAddproductSidebar">
            <Sidebar/>
            <Addproductside/>
        </div>
    </div>
  )
}
