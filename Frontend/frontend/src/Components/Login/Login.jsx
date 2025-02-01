import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import API from '../../ConnectApi'
import axios from 'axios'
export const Login = () => {
    const navigate=useNavigate()
    const [input,setInput]=useState({
        username:"",
        password:""
    })
    const inputHandler=(e)=>{
setInput({...input,[e.target.name]:e.target.value})
    }
    const loginHandle=async()=>{
        try {
            const response=await API.post("/login",input).then((res)=>res.data).then((data)=>data.token)
            localStorage.setItem("user_token",response)
            alert("Login Succesful")
          navigate("/home") 
        } catch (error) {
            alert(error.message)
        }
    }
  return (
    <div className='login'>
<div className="loginBox">
    <h3>Log In</h3>
    <input onChange={inputHandler} type="text" placeholder='Username' name='username' value={input.username}/>
    <input  onChange={inputHandler} type="password" placeholder='Password' name='password' value={input.password}/>
    <button onClick={loginHandle}>Login</button>
    <div className="dontAccount">
        <p>Don't Have Account.</p>
        <Link to={"/"}>Sign Up</Link>
    </div>
</div>
    </div>
  )
}
