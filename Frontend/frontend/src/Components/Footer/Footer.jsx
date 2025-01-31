import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <div className='footer'>
    <h2>Shoppe</h2>
    <ul className='footerList'>
        <li>Company</li>
        <li>About Us</li>
        <li>Products</li>
        <li>Contact Us</li>
    </ul>
    <div className="socialMedia">
    <ion-icon name="logo-facebook"></ion-icon>
    <ion-icon name="logo-instagram"></ion-icon>
    <ion-icon name="logo-whatsapp"></ion-icon>
    <ion-icon name="logo-reddit"></ion-icon>
    </div>
    <hr />
    <div className="copyRight">
        <p>All Rights Reserved |&copy; Created By Amithabh </p>
    </div>
        </div>
  )
}
