import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Addstaff.css'
import axios from 'axios';


const Addstaff=() => {
  const navigator=useNavigate()
  const [photo,setPhoto]=useState("")
const [staff,setstaff]=useState({
      name:"",
    email:"",
    blood:"",
    number:"",
    salary:"",
    experience:"",
    username:"",
    photo:"",
    password:""
})
const handleChange=(e)=>{
  setstaff((pre)=>({...pre,[e.target.name]:e.target.value}))
}
const convert=async(e)=>{
  setPhoto(await convertToBase64(e.target.files[0]))

}

function convertToBase64(file) {
  console.log("b64",file);
  return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
          resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
          reject(error);
      }
  })
}
  const addTask=async(e)=>{

 const res=await axios.post("http://localhost:3001/api/staff",{staff,photo});
 console.log(res);
 if(res.status==201){

  alert("data added")
  
 }
}
//  else{
//   error.error(res.data.msg)
//  }









    return (
    <>
     <div className="addstaff">
     <div className="cont">
            <h2  id='h2'>Add Employee</h2>

            <form>
                <div  className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleChange}  required />
                </div>

                <div  className="form-group">
                    <label htmlFor="blood">Blood Group:</label>
                    <input type="text" id="blood" name="blood" onChange={handleChange}  required />
                </div>

                <div  className="form-group">
                    <label htmlFor="number">Contact Number:</label>
                    <input type="tel" id="number" name="number" onChange={handleChange}  required />
                </div>

                <div id="S5" className="form-group">
                    <label htmlFor="salary">Salary:</label>
                    <input type="number" id="salary" name="salary" onChange={handleChange}  required />
                </div>

                <div id="S6" className="form-group">
                    <label htmlFor="experience">Experience (Years):</label>
                    <input type="text" id="experience" name="experience" onChange={handleChange}  required />
                </div>

                <div id="S7" className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={handleChange}  required />
                </div>

                {/* <div id="S8" className="form-group">
                    <label htmlFor="photo">Photo:</label>
                    <input type="file" id="photo" name="photo" accept="image/*" required />
                </div> */}
                <div className='image'>
    {
      photo?<img src={photo} style={{objectFit:"cover"
      }}  alt="" />:<img className=''style={{objectFit:"cover"
      }}   src='https://th.bing.com/th/id/OIP.FmrCdUaxYnIUApupO7zpRAHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7'/>
    }
  </div>


                    </form>
                    <form action="upload.php" method="post">
        <label >Choose an Image:</label>
        <input type="file" id="file" name="photo" onChange={convert} accept=".html" required/>
        
    </form>

                <div id="S9" className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handleChange}  required />
                </div>

                <div className="form-group">
                    <button type="submit" onClick={addTask} className="submit-button">Add Employee</button>
                </div>
      
        </div>
     </div>

    </>
  )
}

export default Addstaff