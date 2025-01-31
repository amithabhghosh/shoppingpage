import React from 'react'
import { UserNavbar } from '../../Components/UserNavbar/UserNavbar'
import { Menbanner } from '../../Components/Menbanner/Menbanner'
import { MenProduct } from '../../Components/MenProduct/MenProduct'
import { Footer } from '../../Components/Footer/Footer'

export const MenPage = () => {
  return (
    <div>
        <UserNavbar/>
        <Menbanner/>
        <MenProduct/>
        <Footer/>
    </div>
  )
}
