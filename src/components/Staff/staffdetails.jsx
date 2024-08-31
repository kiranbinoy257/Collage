
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
      <div className="main">
                <div className="outer">
                  <div className="b"></div>
                <div className="c">
                <img src="https://cdn-icons-png.flaticon.com/128/54/54476.png" id='c' alt="" />
                </div>
                
                  
                  
                   <div className="subd">
                    
                    <div className="photo"><img src={data.photo} alt="" /></div>
                    <div className="deta">
                    <ul>
                    {/* <p id='p2'>Name:</p>    */}
                           <p id='p3'>{data.name} </p>
                    <p id='p4'>blood :</p> <p id='p5'>{data.blood}</p> 
                    <p id='p6'>Email :</p> <p id='p7'>{data.email}</p>
                    <p id='p8'>Salary:</p> <p id='p9'>{data.salary}</p>             
                    <p id='p10'>Number:</p> <p id='p11'>{data.number}</p>
                    <p id='p12'>Experience:</p><p id='p13'> {data.experience}</p>
                    
                    
                    </ul>
                    </div>
                   
        

                  
                   <button id='delete' onClick={Delete}>Delete</button>
                   <Link to={`/staffedit/${data._id}`}> <button id='edit'>Edit</button></Link>
                   
                   </div>
                   
                </div>
                </div>
                      
     
    </>
  ) 
}

export default Getstaff