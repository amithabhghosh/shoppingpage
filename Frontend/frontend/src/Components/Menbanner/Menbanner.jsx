import React from 'react'
import './Menbanner.css'
import menBanner from '../../assets/images/MenBanner.png'
export const Menbanner = () => {
  return (
    <div className='mainBanner'>
    <div className="mainBannerDetails">
        <h3>Trending Men's Collections Here</h3>
        <p>Latest Collections</p>
        <button>Shop Now</button>
    </div>
    <div className="mainBannerImage">
        <img src={menBanner} alt="mainBanner" />
    </div>
        </div>
  )
}
