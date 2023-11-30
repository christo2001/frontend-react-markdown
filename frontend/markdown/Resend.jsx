import React, { useState } from 'react';
import axios from 'axios';

const ResendActivation = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResendActivation = async () => {
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
      <h2>Resend Activation</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleResendActivation}>Resend Activation Email</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResendActivation;
