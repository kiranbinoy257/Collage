import { useEffect, useState } from 'react'
import './getstaff.css'
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
          <Link to={`/staffdetails/${dt._id}`}>
          <img 
                    style={{ objectFit: "cover" }} 
                    className="h-12 w-12 rounded-full"
                    src={dt.photo || "https://th.bing.com/th/id/OIP.YpQ0oZGLK4k09k6sq354OwHaHx?rs=1&pid=ImgDetMain"} 
                    alt="Staff"
                  />
          </Link>
        </td>
        <td className="px-4 py-2">
          <Link to={`/staffdetails/${dt._id}`}>
            {dt.name}
          </Link>
        </td>
        <td className="px-4 py-2">
          <Link to={`/staffdetails/${dt._id}`}>
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

export default Getstaff