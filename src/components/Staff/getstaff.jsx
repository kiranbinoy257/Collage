import { useEffect, useState } from 'react'
import './staffdetails.css'
import axios from 'axios';
import { Link,useParams  } from 'react-router-dom'

import {useNavigate} from 'react-router-dom'

function Getstaff() {
    const [data, setData] = useState([])
    const getData = async () => {
  
      const res = await axios.get("http://localhost:3001/api/get");
      console.log(res.data);
      setData([...res.data])
    }
    useEffect(() => {
      getData()
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
               <Link to={`/staffdetails/${dt._id}`}> <ul key={index}>
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
            <Link to={'/add'}> <div className="add">
              <h5>+</h5>
            </div></Link>
           
          </div>
  
  
  
        </div>
      </>
    )
}

export default Getstaff