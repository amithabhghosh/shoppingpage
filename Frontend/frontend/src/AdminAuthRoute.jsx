import React from 'react'
import { useNavigate } from 'react-router-dom'
export const AdminAuthRoute = ({children}) => {
const navigate=useNavigate()
const token=localStorage.getItem("admin_token")
if(token)return children
navigate("/adminlogin")
alert("please Login")
}
