import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function contactstaff() {
  const [data, setData] = useState([])
  const getData = async () => {
const token=localStorage.getItem("staff");
    const res = await axios.get("http://localhost:3000/api/getstaffone",{headers:{'Authorization':`Bearer ${token}`}});
    console.log(res.data);
    setData([...res.data])
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>


<div className="container">
     
      <div className="contacts-header">
        <h1>Contacts</h1>
        <Link to={'/Addstaff'}>         <button className="add-button">add contact</button>
        </Link>
      </div>
  
    
      <div className="contact-list">

      {data.map((dt,index)=>(
                <div className='contact' key={index}>
           
  
                  

            

                    <span> {dt.name}</span>
                 
           
                </div>
            
             

              ))}




       
      </div>
    </div>
















    </>
  )
}

export default contactstaff