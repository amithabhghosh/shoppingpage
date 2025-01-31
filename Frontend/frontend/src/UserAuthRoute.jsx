import React from 'react'
import { useNavigate } from 'react-router-dom'
export const UserAuthRoute = ({children}) => {
 const navigate=useNavigate()
 const token =localStorage.getItem("user_token")
 if(token)return children
 alert("please Login")
 navigate("/login")
}
