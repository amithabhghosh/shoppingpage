import React from 'react'
import { UserNavbar } from '../../Components/UserNavbar/UserNavbar'
import { Outlet } from 'react-router-dom'
import { MainBanner } from '../../Components/MainBanner/MainBanner'
import { Allproducts } from '../../Components/AllProducts/Allproducts'
import { Footer } from '../../Components/Footer/Footer'
export const Homepage = () => {
  return (
    <div>
<UserNavbar/>
<MainBanner/>
<Allproducts/>
<Footer/>
    </div>
  )
}
