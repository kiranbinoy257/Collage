import { useEffect, useState } from 'react'
import './studentdetails.css'
import axios from 'axios';
import { Link,useParams  } from 'react-router-dom'

import {useNavigate} from 'react-router-dom'

function Getstudentdata() {
  const navigator=useNavigate()
 const{id}=useParams();
 const [data,setData]=useState({});
 const [count,setCount]=useState(0)

  const getData=async()=>{
    console.log(id);
    const res=await axios.get(`http://localhost:3001/api/getstudentedit/${id}`);
    console.log(res.data);

    setData({...res.data})
  }
  
  
  const Delete=async()=>{
    const res=await axios.delete(`http://localhost:3001/api/deletestudent/${id}`)
    console.log(res);

    if(res.status==200){
      navigator('/adminpage')
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
                    <p id='p8'>studentid:</p> <p id='p9'>{data.stdid}</p>             
                    <p id='p10'>Number:</p> <p id='p11'>{data.number}</p>
                    <p id='p12'>Division:</p><p id='p13'> {data.div}</p>
                    
                    
                    </ul>
                    </div>
                   
        

                  
                   <button id='delete' onClick={Delete}>Delete</button>
                   <Link to={`/studentedit/${data._id}`}> <button id='edit'>Edit</button></Link>
                   
                   </div>
                   
                </div>
                </div>
                      
     
    </>
  ) 
}

export default Getstudentdata