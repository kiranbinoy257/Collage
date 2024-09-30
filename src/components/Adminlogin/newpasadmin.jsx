import react from "react"
import {Link, useParams} from 'react-router-dom'


const Newpassadmin = () => {
    const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle email submission
  const handleEmailSubmit = async () => {
    try {
      console.log(email);
      const res = await axios.post("http://localhost:3000/api/stffpwd", { email });
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
      const res = await axios.post("http://localhost:3000/api/sotpverify", { email, otp });
      setMessage(res.data.msg); // Show success message
      if (res.status==200) {
        navigator(`/staffpage/${email.email}`)
       }
    } catch (err) {
      setMessage(err.response?.data?.msg || "OTP verification failed. Please try again.");
    }
  };
    return (
        <>
         {/* New Password Form */}
         <div className="flex items-center justify-center h-screen bg-gray-100">
         <div className="bg-white p-10 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Set New Password</h2>
      <p className="text-center text-gray-600 text-sm mb-8">Enter a new password</p>
      <form action="/set-new-password" method="post">
        <label htmlFor="new-password" className="block text-sm text-gray-700 mb-2">New Password</label>
        <input
          type="password"
          id="new-password"
          name="new-password"
          required
          className="w-full px-4 py-2 mb-4 border rounded-md text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <label htmlFor="confirm-password" className="block text-sm text-gray-700 mb-2">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          required
          className="w-full px-4 py-2 mb-4 border rounded-md text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="submit"
          value="Set New Password"
          className="w-full bg-green-500 text-white py-2 rounded-md cursor-pointer hover:bg-green-600 transition"
        />
      </form>

      <div className="text-center mt-6">
        <a href="/login" className="text-sm text-green-500 hover:underline">Back to Login</a>
      </div>
      </div>
      </div>

        </>
    )
}
export default Newpassadmin
