import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Addstudent.css'
import axios from 'axios';


const Addstudent=() => {
  const navigator=useNavigate()
  const [photo,setPhoto]=useState("")
const [student,setstudent]=useState({
      name:"",
    email:"",
    blood:"",
    number:"",
    otp:"",
    div:"",
    stdid:"",
    photo:"",
    password:""
})
const handleChange=(e)=>{
  setstudent((pre)=>({...pre,[e.target.name]:e.target.value}))
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

 const res=await axios.post("http://localhost:3001/api/addstudent",{student,photo});
 console.log(res);
 if(res.status==201){

  alert("student added sucessfully")
  
 }
}
//  else{
//   error.error(res.data.msg)
//  }









    return (
    <>
     <div className="addstaff">
     <div className="cont">
            <h2  id='h2'>Add Student</h2>

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

                {/* <div id="S5" className="form-group">
                    <label htmlFor="otp">:</label>
                    <input type="number" id="otp" name="otp" onChange={handleChange}  required />
                </div> */}

                <div id="S6" className="form-group">
                    <label htmlFor="department">Department:</label>
                    <input type="text" id="Department" name="department" onChange={handleChange}  required />
                </div>

                <div id="S7" className="form-group">
                    <label htmlFor="stdid">Student id:</label>
                    <input type="text" id="stdid" name="stdid" onChange={handleChange}  required />
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
                    <button type="submit" onClick={addTask} className="submit-button">Add Student</button>
                </div>
      
        </div>
     </div>

    </>
  )
}

export default Addstudent