
import { useEffect, useState } from 'react'
import './staffdetails.css'
import axios from 'axios';
import { Link,useParams  } from 'react-router-dom'

import {useNavigate} from 'react-router-dom'

function Getstaff() {
  const navigator=useNavigate()
 const{id}=useParams();
 const [data,setData]=useState({});
 const [count,setCount]=useState(0)

  const getData=async()=>{
    console.log(id);
    const res=await axios.get(`http://localhost:3001/api/getforedit/${id}`);
    console.log(res.data);

    setData({...res.data})
  }
  
  
  const Delete=async()=>{
    const res=await axios.delete(`http://localhost:3001/api/delete/${id}`)
    console.log(res);

    if(res.status==200){
      navigator('/getstaff')
    }
  }
  useEffect(()=>{
    getData()
  },[count])
  

    return (
    <>
     <div className="main flex items-center justify-center h-screen bg-gray-100">
      <div className="outer bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        {/* Header with Back Button */}
        <div className="flex justify-between items-center mb-6">
        <button
  onClick={() => navigator(-1)}
  className="fixed top-2 left-2 h-10 w-20 bg-black text-white hover:text-gray-300 focus:outline-none"
>
  ← Back
</button>

          <h2 className="text-xl font-bold text-gray-700">Staff Details</h2>
        </div>

        {/* Staff Photo and Details */}
        <div className="subd flex items-start">
          <div className="photo mr-8">
            <img
              src={data.photo}
              alt={data.name}
              className="w-40 h-40 object-cover rounded-full shadow-md"
            />
          </div>
          <div className="deta flex-1">
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <span className="font-semibold">Name:</span> {data.name}
              </li>
              <li>
                <span className="font-semibold">Blood Group:</span> {data.blood}
              </li>
              <li>
                <span className="font-semibold">Email:</span> {data.email}
              </li>
              <li>
                <span className="font-semibold">Salary:</span> {data.salary}
              </li>
              <li>
                <span className="font-semibold">Phone Number:</span> {data.number}
              </li>
              <li>
                <span className="font-semibold">Experience:</span> {data.experience}
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-8 space-x-4">
        <Link
            to={'/Addstudent'}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
          >
            Add Student
          </Link>
          <Link
            to={'/getstudent'}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
          >
           Display Students
          </Link>
          
          <Link to={`/staffedit/${data._id}`}>
          <button
            
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all">
            
          
            Edit Data
          </button>
          </Link>
          
            <button onClick={Delete} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all">
              Delete
            </button>
          
        </div>
      </div>
    </div>
                      
     
    </>
  ) 
}

export default Getstaff