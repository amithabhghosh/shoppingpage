import React from 'react'
import '../MainBanner/MainBanner.css'
import womenBanner from '../../assets/images/womenBanner.png'
export const WomenBanner = () => {
  return (
   <div className='mainBanner'>
       <div className="mainBannerDetails">
           <h3>Trending Women's Collections Here</h3>
           <p>Latest Collections</p>
           <button>Shop Now</button>
       </div>
       <div className="mainBannerImage">
           <img src={womenBanner} alt="mainBanner" />
       </div>
           </div>
  )
}
