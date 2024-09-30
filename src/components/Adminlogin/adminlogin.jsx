import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './admin.css'
const Adminlogin = () => {

    const navigator=useNavigate()
  
 
  const  [loginuser,setLoginUser]=useState({
    email:"",
    password:""
  })
  
  
  
  
  const signIn=async()=>{
    console.log(loginuser);
    const res=await axios.post("http://localhost:3001/api/login",loginuser)
    console.log(res.data);
    if(res.status==200){
  
     navigator('/adminpage')
    }
    
  }
  
  
   
    
    const handleChange2=(e)=>{
      setLoginUser((pre)=>({...pre,[e.target.name]:e.target.value}))
        }
    return (
      <div>
        {/* <hr />
  
        <div className="form-section">
          <h2>Sign In</h2>
          <input type="text" name="email" onChange={handleChange2} placeholder="Email" />
          <input type="password" name="password" onChange={handleChange2} placeholder="Password" />
          <button onClick={signIn}>Sign In</button>
          <Link to="/forgot" className="forgot-password-link">Forgot password?</Link>
        </div> */}

<div className="login-page flex items-center justify-center h-screen bg-gray-500">
  <div className="form bg-white max-w-2xl w-full mx-auto p-16 text-center shadow-lg rounded-lg">
    <h1 className="text-3xl font-bold mb-8 text-gray-700">Login Admin</h1>
    <div className="form-section">
      <h2 className="text-xl font-semibold mb-6 text-gray-600">Sign In</h2>
      <input
        type="text"
        name="email"
        onChange={handleChange2}
        placeholder="Email"
        className="w-full bg-gray-100 p-4 mb-6 text-base rounded-lg"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange2}
        placeholder="Password"
        className="w-full bg-gray-100 p-4 mb-6 text-base rounded-lg"
      />
      <button
        onClick={signIn}
        className="w-auto px-10 py-4 bg-green-500 text-white uppercase rounded-lg hover:bg-green-600 transition-all"
      >
        Login In
      </button>
      Not have an account !!<Link to="/admin" className="block mt-5 text-blue-500 text-base">
        Signup
      </Link>
      
      <Link to="/forgot" className="block mt-6 text-green-500 text-base">
        Forgot password?
      </Link>
      
    </div>
  </div>
</div>





      </div>
      
    )
  }
  
  export default Adminlogin