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
         <table className="min-w-full table-auto">
  <thead className="bg-gray-200">
    <tr>
      <th className="px-4 py-2 text-left">Photo</th>
      <th className="px-4 py-2 text-left">Name</th>
      <th className="px-4 py-2 text-left">Email</th>
    </tr>
  </thead>
  <tbody>
    {data.map((dt, index) => (
      <tr key={index} className="border-b">
        <td className="px-4 py-2">
          <Link to={`/studentdetails/${dt._id}`}>
          <img 
                    style={{ objectFit: "cover" }} 
                    className="h-12 w-12 rounded-full"
                    src={dt.photo || "https://th.bing.com/th/id/OIP.YpQ0oZGLK4k09k6sq354OwHaHx?rs=1&pid=ImgDetMain"} 
                    alt="Staff"
                  />
          </Link>
        </td>
        <td className="px-4 py-2">
          <Link to={`/studentdetails/${dt._id}`}>
            {dt.name}
          </Link>
        </td>
        <td className="px-4 py-2">
          <Link to={`/studentdetails/${dt._id}`}>
            {dt.email}
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      </>
    )
}

export default Getstudent