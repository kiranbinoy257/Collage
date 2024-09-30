import react from "react"
import {Link, useParams} from 'react-router-dom'


const Creatnewpassadmin = () => {


    return(
       
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        {/* <h2 className="text-2xl font-semibold mb-4">Password Reset</h2> */}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Enter your email</label>
          <input
            type="text"
           
            // value={email}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            required
          />
          <button
            // onClick={handleEmailSubmit }
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
          ></button>
          </div>
          </div>
          </div>
        
    )
}
export default Creatnewpassadmin