import React from 'react'
import { UserNavbar } from '../../Components/UserNavbar/UserNavbar'
import { KidBanner } from '../../Components/KidBanner/KidBanner'
import { KidProduct } from '../../Components/KidProdcut/KidProduct'
import { Footer } from '../../Components/Footer/Footer'

export const KidPage = () => {
  return (
    <div>
        <UserNavbar/>
        <KidBanner/>
        <KidProduct/>
        <Footer/>
    </div>
  )
}
