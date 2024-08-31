import React,{ useEffect,useState } from 'react'
import './staffedit.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link, useParams} from 'react-router-dom'
const staffEdit=()=>{
  const {id}=useParams()
   const navigator=useNavigate()
  const [data,setData]=useState({})
  const [photo,setphoto]=useState("")
  const handlechange=(e)=>{
    
    setData((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  const update=async()=>{
    console.log(data);
    const res=await axios.patch(`http://localhost:3001/api/update/${id}`,data);
    console.log(res);
    if(res.status==200){
      navigator('/getstaff')
    }
  }
  
const getUser=async()=>{
  // console.log(data);
  const res=await axios.get(`http://localhost:3001/api/getforedit/${id}`)
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
          <div className="main">
                    <div className="outer">
                      <p> Edit Contact</p>
                       <div className="suba">
                        <form>
                        
      
      <div className="name"><label>Name:<br></br> </label>
      <input name='name' value={data.name} onChange={handlechange}   id='name'   /> <br></br></div>
      <label>Username:<br></br></label>
      <input name='username' type="text " id='Lname' value={data.username} onChange={handlechange} /><br></br>
      <label >Email :<br></br></label>
      <input name='email' type="text" value={data.email} onChange={handlechange}  id='email'  /><br></br>
      <label >Blood  :<br></br> </label>
      <input name=' blood' type="text" id='DOB' value={data.blood}  onChange={handlechange}   /><br></br>
      <label >Number:<br></br></label>
      <input name='number' type="text" id='number' value={data.number} onChange={handlechange}  /><br></br>
      <label>Salary:<br></br> </label>
      <input name='salary' type="text" id='Altnumber' value={data.salary} onChange={handlechange}    /><br></br>
      <label >Experiance :<br></br> </label>
      <input name='experience' type="text" id='DOB' value={data.experience}  onChange={handlechange}   /><br></br>
      <div className='image'>
    {
      photo?<img src={photo} style={{objectFit:"cover"
      }}  alt="" />:<img className=''style={{objectFit:"cover"
      }}   src={data.photo}/>
    }
  </div>
  <form action="upload.php" method="post" enctype="multipart/form-data">
        <label for="file">Choose an Image:</label>
        <input type="file" id="file" onChange={convert} name="photo"  accept=".html" required/>
        
    </form>
      <button id='add' onClick={update}>Save</button>
    
    
                        </form>
                        
                     
                       </div>
                       
                    </div>
                    
          
          </div>
        </>
      )


}
export default staffEdit
