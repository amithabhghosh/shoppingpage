import React from 'react'
import { UserNavbar } from '../../Components/UserNavbar/UserNavbar'
import { Cart } from '../../Components/Cart/Cart'
import {Footer} from '../../Components/Footer/Footer'
export const CartPage = () => {
  return (
    <div>
        <UserNavbar/>
        <Cart/>
        <Footer/>
    </div>
  )
}
