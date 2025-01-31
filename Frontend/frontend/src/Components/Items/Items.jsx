import React from 'react'
import './Items.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const Items = (props) => {
  const navigate=useNavigate()
  const navi=()=>{
navigate(`/product/${props.id}`)
  }
  return (
    // <Link to={`/product/${props.id}`} className='link' >
    <div className='items' onClick={navi} >
     <div className="itemContent">
        <img src={props.image} alt="" />
     </div>
     <div className="itemDetails">
        <p>{props.name}</p>
        <div className="itemPrices">
            <p className='oldPrice'>{props.old_price}Rs</p>
            <p className='newPrice'>{props.new_price}Rs</p>
        </div>
     </div>
    </div>

  )
}
