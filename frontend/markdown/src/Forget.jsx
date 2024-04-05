import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import forgetcss from './forget.module.css';
import { useNavigate } from 'react-router-dom';


function Forget() {
  const navigate = useNavigate()
  const [forgetformdata, setforgetformdata] = useState({
    email: '',
  });
  const [message, setmessage] = useState('');

  const handleChange = (e) => {
    setforgetformdata({ ...forgetformdata, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/api/user/forgetpassword', forgetformdata);
      console.log('Success:', response.data); // Log the response data
      setmessage('An OTP sent successfully to your Email Address.'); // Set a success message
  
      // Display the message for a few seconds and then navigate to "otp"
      setTimeout(() => {
        navigate('/otp');
      }, 2000); // Adjust the delay (in milliseconds) as needed
    } catch (error) {
      console.error('Error:', error);
      setmessage('An error occurred. Please try again.'); // Set an error message
    }
  };
  



  return (
    <div>
      <div className={forgetcss.body}>
        <form onSubmit={handleSubmit} className={forgetcss.forgetpassowrd}>

          <div className={forgetcss.head}>
            <h2>enter your registered email </h2>
          </div>

          <div className={forgetcss.inputbox}>

            <input 
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            value={forgetformdata.email}
            required
            />

            <span>email</span>

          </div>

          <button className={forgetcss.forgetbutton}>submit</button>
        </form>

        {message && <p className={forgetcss.message}>{message}</p>}


      </div>
    </div>
  );
}

export default Forget;
