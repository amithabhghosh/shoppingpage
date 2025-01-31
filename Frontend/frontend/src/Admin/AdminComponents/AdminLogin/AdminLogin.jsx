import React, { useState } from 'react'
import './AdminLogin.css'
import API from '../../../ConnectApi'
import { useNavigate } from 'react-router-dom'
export const AdminLogin = () => {
  const navigate=useNavigate()
const [input,setInput]=useState({
  username:"",
  password:""
})
 const inputHandle=(e)=>{
setInput({...input,[e.target.name]:e.target.value})
 }

 const loginHandle=async()=>{
  try {
    const response=await API.post("/admin/login",input).then((res)=>res.data).then((data)=>data.token)
    localStorage.setItem("admin_token",response)
    alert("login Succesful")
navigate("/admin")
  } catch (error) {
    alert(error.message)
  }
 }

  return (
    <div className='adminLogin'>
<div className="adminLoginBox">
    <h3>Admin Login</h3>
    <input onChange={inputHandle} type="text" name='username' placeholder='Username' value={input.username}/>
    <input onChange={inputHandle} type="password" name='password' placeholder='Password' value={input.password} />
    <button onClick={loginHandle}>Login</button>
</div>
    </div>
  )
}
