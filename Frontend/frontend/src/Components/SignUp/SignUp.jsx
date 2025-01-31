import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import API from '../../ConnectApi'
import { useNavigate } from 'react-router-dom'
export const SignUp = () => {
    const navigate=useNavigate()
    const [input,setInput]=useState({
        username:"",
        email:"",
        password:""
       })
       const changeHandle= (e)=>{
setInput({...input,[e.target.name]:e.target.value})
       }

       const signupHandle=async ()=>{
        try {
            const response=await API.post("/register",input)
             alert(response.data.message)
            navigate("/login")
        } catch (error) {
            alert("Regsitration Failed")
        }

       }
  return (
    <div className='signup'>
        <div className="signUpBox">
            <h3>Sign Up</h3>
            <input onChange={changeHandle} type="text" placeholder='Username' name='username' value={input.username}/>
            <input onChange={changeHandle} type="email" placeholder='Email' name='email' value={input.email}/>
            <input onChange={changeHandle} type="password" placeholder='Password' name='password' value={input.password}/>
            <button onClick={signupHandle}>Sign Up</button>
            <div className="already">
                <p>Already Have An Account.</p>
<Link to={"/login"}>Login Now</Link>
            </div>
        </div>

    </div>
  )
}
