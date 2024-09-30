import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const   Forgot = () => {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle email submission
  const handleEmailSubmit = async () => {
    try {
      console.log(email);
      const res = await axios.post("http://localhost:3001/api/adminforgeta", { email });
      console.log(res);
      setMessage("OTP sent to your email");
    } catch (err) {
      setMessage("Failed to send OTP. Please try again.");
    }
  };


  // Function to handle OTP verification
  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/api/sotpverifya", { email, otp });
      setMessage(res.data.msg); // Show success message
      if (res.status==200) {
         navigator(`/Createnewpasadmin/${email.email}`)
        alert("otp verified")
       }
    } catch (err) {
      setMessage(err.response?.data?.msg || "OTP verification failed. Please try again.");
    }
  };

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        {/* <h2 className="text-2xl font-semibold mb-4">Password Reset</h2> */}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Enter your email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            required
          />
          <button
            onClick={handleEmailSubmit }
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
          >
            Get OTP
          </button>
        </div>

        <form onSubmit={handleOtpSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter OTP"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Verify OTP
          </button>
        </form>

        {message && (
          <div className={`mt-4 ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Forgot;
