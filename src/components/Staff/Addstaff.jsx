import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import './Addstaff.css'
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
      <div className="addstaff bg-gray-500 min-h-screen flex items-center justify-center">
      <div className="cont bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 id="h2" className="text-2xl font-bold text-red-600 mb-6">Add Employee</h2>
        <form>
          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="blood" className="block text-gray-700">Blood Group:</label>
            <input
              type="text"
              id="blood"
              name="blood"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="number" className="block text-gray-700">Contact Number:</label>
            <input
              type="tel"
              id="number"
              name="number"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="salary" className="block text-gray-700">Salary:</label>
            <input
              type="number"
              id="salary"
              name="salary"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="experience" className="block text-gray-700">Experience (Years):</label>
            <input
              type="text"
              id="experience"
              name="experience"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="username" className="block text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="image mb-4">
            {photo ? (
              <img
                src={photo}
                alt="Employee"
                style={{ objectFit: "cover" }}
                className="h-20 w-20 rounded-full"
              />
            ) : (
              <img
                className="h-20 w-20 rounded-full"
                style={{ objectFit: "cover" }}
                src="https://th.bing.com/th/id/OIP.FmrCdUaxYnIUApupO7zpRAHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7"
                alt="Placeholder"
              />
            )}
          </div>

          <div className="form-group mb-4">
            <form action="upload.php" method="post">
              <label className="block text-gray-700">Choose an Image:</label>
              <input
                type="file"
                id="file"
                name="photo"
                onChange={convert}
                accept=".html"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </form>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="form-group mb-4">
            <button
              type="submit"
              onClick={addTask}
              className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>

    </>
  )
}

export default Addstaff