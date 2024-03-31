import React, { useState } from 'react';
import axios from 'axios';
import img2 from '../images/image3.png';
import passwordcss from './password.module.css';
import { useNavigate } from 'react-router-dom';

function Password() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setNewPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('localhost:3000/api/user/changepassword', {
        email: email,
        newpassword: newpassword
      });
  
      // Password change was successful
      setMessage('Password changed successfully.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      // An error occurred during the password change
      setMessage('An error occurred while changing the password. Please try again.');
    }
  };
  

  return (
    <div className={passwordcss.body}>
      <section className={passwordcss.side}>
        <img src={img2}/>
      </section>


      <section className={passwordcss.main}>
        <div className={passwordcss.logincontainer}>
          <div className={passwordcss.title}>welcome</div>
          <div className={passwordcss.seprator}></div>
          <p className={passwordcss.welcomemessage}>please provide registered email to proceed and have access to change password</p>


          <form onSubmit={handleSubmit} className={passwordcss.loginform}>
            <div className={passwordcss.formcontrol}>

              <input 
               type='email'
               placeholder='email'
               name='email'
               id='email'
               className={passwordcss.inputfield}
               onChange={handleChange}
               value={email}
               required
               />

            </div>

            <div className={passwordcss.formcontrol}>

              <input 
              type='password'
              placeholder='password'
              name='password'
              id='password'
              className={passwordcss.inputfield}
              onChange={handleChange}
              value={newpassword}
              required
              />

            </div>

            <button type='submit' className={passwordcss.submits}>submit</button>

            {message && <p className={passwordcss.message}>{message}</p>}



          </form>
        </div>
      </section>
    </div>
  );
}

export default Password;
