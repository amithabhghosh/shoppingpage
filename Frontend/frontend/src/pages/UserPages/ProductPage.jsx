import React from 'react'
import { UserNavbar } from '../../Components/UserNavbar/UserNavbar'
import { Product } from '../../Components/Product/Product'
import { Footer } from '../../Components/Footer/Footer'
import { RelatedProduct } from '../../Components/RelatedProducts/RelatedProduct'

export const ProductPage = () => {
  return (
    <div>
        <UserNavbar/>
        <Product/>
        <RelatedProduct/>
        <Footer/>
    </div>
  )
}
