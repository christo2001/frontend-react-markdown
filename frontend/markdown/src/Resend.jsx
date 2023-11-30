import React, { useState } from 'react';
import axios from 'axios';
import resendcss from './resend.module.css';

const ResendActivation = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://capstone-t11c.onrender.com/api/user/resendactivation', { email });

      if (response.status === 200) {
        setMessage(response.data.message || 'Activation email resent successfully');
      } else {
        setMessage(response.data.error || 'Resend activation failed.');
      }
    } catch (error) {
      console.error('Error during resend activation:', error);
      setMessage('An error occurred during resend activation.');
    }
  };

  return (
    <div>
      <div className={resendcss.body}>
        <form onSubmit={handleSubmit} className={resendcss.forgetpassowrd}>
          <div className={resendcss.head}>
            <h2>account activation</h2>
          </div>

          <div className={resendcss.inputbox}>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
            <span>Email</span>
          </div>

          <button type="submit" className={resendcss.forgetbutton}>
            Submit
          </button>
        </form>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResendActivation;
