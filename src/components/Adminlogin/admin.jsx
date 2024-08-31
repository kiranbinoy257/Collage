import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './admin.css'

const User = () => {

  const navigator=useNavigate()

const  [user,setUser]=useState({
   name:"",
  email:"",
  username:"",
  password:"",
  cpassword:""
})
const  [loginuser,setLoginUser]=useState({
  email:"",
  password:""
})

const signUp=async ()=>{
  console.log(user);

  const res=await axios.post("http://localhost:3001/api/user",user)
  console.log(res);
if(res.status==201){
  alert("sign up successfully")
}
}


const signIn=async()=>{
  console.log(loginuser);
  const res=await axios.post("http://localhost:3001/api/login",loginuser)
  console.log(res.data);
  if(res.status==200){

   navigator('/adminpage')
  }
  
}


 
  const handleChange=(e)=>{
setUser((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  const handleChange2=(e)=>{
    setLoginUser((pre)=>({...pre,[e.target.name]:e.target.value}))
      }
  return (
    <div>
      
      <div className="form-container">
      <div className="form-section">
        <h2>Sign Up</h2>
        <input type="text" name="name" onChange={handleChange} placeholder="name" />
        <input type="text" name="username" onChange={handleChange} placeholder="Username" />
        <input type="text" name="email" onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        <input type="password" name="cpassword" onChange={handleChange} placeholder="Confirm Password" />
        <button onClick={signUp}>Sign Up</button>
      </div>

      <hr />

      <div className="form-section">
        <h2>Sign In</h2>
        <input type="text" name="email" onChange={handleChange2} placeholder="Email" />
        <input type="password" name="password" onChange={handleChange2} placeholder="Password" />
        <button onClick={signIn}>Sign In</button>
        <Link to="/forgot" className="forgot-password-link">Forgot password?</Link>
      </div>
    </div>
    </div>
  )
}

export default User