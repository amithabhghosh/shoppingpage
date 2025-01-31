import React from 'react'
import './MainBanner.css'
import mainBanner from '../../assets/images/MainBanner.png'
export const MainBanner = () => {
  return (
    <div className='mainBanner'>
<div className="mainBannerDetails">
    <h3>Trending Collections Here</h3>
    <p>Latest Collections</p>
    <button>Shop Now</button>
</div>
<div className="mainBannerImage">
    <img src={mainBanner} alt="mainBanner" />
</div>
    </div>
  )
}
