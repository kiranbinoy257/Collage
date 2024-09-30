import React,{ useEffect,useState } from 'react'
import './studentedit.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link, useParams} from 'react-router-dom'
const studentEdit=()=>{
  const {id}=useParams()
   const navigator=useNavigate()
  const [data,setData]=useState({})
  const [photo,setphoto]=useState("")
  const handlechange=(e)=>{
    
    setData((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  const update=async()=>{
    console.log(data);
    const res=await axios.patch(`http://localhost:3001/api/updatestudent/${id}`,data);
    console.log(res);
    if(res.status==200){
      navigator('/getstudent')
    }
  }
  
const getUser=async()=>{
  // console.log(data);
  const res=await axios.get(`http://localhost:3001/api/getstudentedit/${id}`)
  console.log(res.data);
  setData(res.data)
}


const convert=async(e)=>{
  const photo=await convertToBase64(e.target.files[0])
  setData((pre)=>({...pre,[e.target.name]: photo}))

}

function convertToBase64(file) {
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

useEffect(()=>{
  getUser()
},[])
    return (
        <>
        
          {/* update */}
          <div className="addstaff bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="cont bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 id="h2" className="text-2xl font-bold text-red-600 mb-6">Add Student</h2>
        <form>
          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name} 
              onChange={handlechange}
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
              value={data.email}
              onChange={handlechange}
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
              value={data.blood}
              onChange={handlechange}
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
              value={data.number}
              onChange={handlechange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="department" className="block text-gray-700">Department:</label>
            <input
              type="text"
              id="div"
              name="div"
              value={data.div}
              onChange={handlechange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="stdid" className="block text-gray-700">Student ID:</label>
            <input
              type="text"
              id="stdid"
              name="stdid"
              value={data.stdid}
              onChange={handlechange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="image mb-4">
            {photo ? (
              <img
                src={photo}
                alt="Student"
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
            <label className="block text-gray-700">Choose an Image:</label>
            <input
              type="file"
              id="file"
              name="photo"
              onChange={convert}
              accept="image/*"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>
{/* 
          <div className="form-group mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handlechange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div> */}

          

          <div className="form-group mb-4">
            <button
              type="submit"
             onClick={update}
              className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    



        </>
      )


}
export default studentEdit
