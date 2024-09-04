import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './staff.css'

const Staff = () => {

  const navigator=useNavigate()

const  [staff,setstaff]=useState({
   name:"",
  email:"",
  username:"",
  password:"",
  cpassword:""
})
const  [loginstaff,setLoginstaff]=useState({
  email:"",
  password:"",
  
})

const signUp=async ()=>{
  console.log(staff);

  const res=await axios.post("http://localhost:3001/api/staff",staff)
  console.log(res);
if(res.status==201){
  alert("sign up successfully")
}
}


const signIn=async()=>{
  console.log(loginstaff);
  const res=await axios.post("http://localhost:3001/api/stafflogin",loginstaff)
  const id=res.data
  console.log(res.data);
  console.log(id);
  
  if(res.status==200){
    // // localStorage.setItem("user",res.data);
     navigator(`/staffdetails/${id}`)
    // console.log(staff._id);
    
  }
   
}


 
  const handleChange=(e)=>{
setstaff((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  const handleChange2=(e)=>{
    setLoginstaff((pre)=>({...pre,[e.target.name]:e.target.value}))
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

export default Staff