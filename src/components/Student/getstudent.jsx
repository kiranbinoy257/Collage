import { useEffect, useState } from 'react'
import './getstudent.css'
import axios from 'axios';
import { Link,useParams  } from 'react-router-dom'

import {useNavigate} from 'react-router-dom'

function Getstudent() {
    const [data, setData] = useState([])
    const getstudent = async () => {
  
      const res = await axios.get("http://localhost:3001/api/getstudent");
      console.log(res.data);
      setData([...res.data])
    }
    useEffect(() => {
      getstudent()
    }, [])
  
    return (
      <>
        <div className="mainp">
          <div className="outerp">
            <form>
              <input type="text" placeholder="Search" id="Search" />
            </form>
            <div className="subdivp">
              <>
              {data.map((dt,index)=>(
               <Link to={`/studentdetails/${dt._id}`}> <ul key={index}>
                <img src={dt.photo} alt="" />{dt.name}
             </ul></Link>
              ))}
                
              </>
              
    {/* {data.map((dt) => (
      <div key={dt._id}>
        
         <Link to={`/details/${dt._id}`}><button id='oname'>{dt.fname}</button></Link>
         
        
      </div>
    ))}
     */}
  
  
            </div>
            <Link to={''}> <div className="add">
              <h5>+</h5>
            </div></Link>
           
          </div>
  
  
  
        </div>
      </>
    )
}

export default Getstudent