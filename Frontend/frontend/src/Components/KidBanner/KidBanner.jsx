import React from 'react'
import '../MainBanner/MainBanner.css'
import kidBanner from '../../assets/images/kidBanner.png'
export const KidBanner = () => {
  return (
   <div className='mainBanner'>
  <div className="mainBannerDetails">
      <h3>Trending Kid's Collections Here</h3>
      <p>Latest Collections</p>
      <button>Shop Now</button>
  </div>
  <div className="mainBannerImage">
      <img src={kidBanner} alt="mainBanner" />
  </div>
      </div>
  )
}
