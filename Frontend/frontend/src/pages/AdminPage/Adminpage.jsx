import React from 'react'
import { Navbar } from '../../Admin/AdminComponents/Navbar/Navbar'
import { Sidebar } from '../../Admin/AdminComponents/Sidebar/Sidebar'
import '../AdminCss/AdminPage.css'
import { AdminProductList } from '../../Admin/AdminComponents/AdminProductList/AdminProductList'

export const Adminpage = () => {
  return (
    <div>
        <Navbar/>
        <div className="sidebarpage">
           <Sidebar/> 
           <AdminProductList/>
        </div>
    </div>
  )
}
