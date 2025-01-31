import React from 'react'
import { UserNavbar } from '../../Components/UserNavbar/UserNavbar'
import { WomenBanner } from '../../Components/WomenBanner/WomenBanner'
import { WomenProduct } from '../../Components/WomenProduct/WomenProduct'
import { Footer } from '../../Components/Footer/Footer'

export const WomenPage = () => {
  return (
    <div>
        <UserNavbar/>
        <WomenBanner/>
        <WomenProduct/>
        <Footer/>
    </div>
  )
}
