import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import verifycss from './verify.module.css';

const Verification = ({ token }) => {
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [resendLink, setResendLink] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch(`https://capstone-t11c.onrender.com/api/user/verify/${token}`);
        const data = await response.json();

        if (response.ok) {
          setVerificationStatus(data.message || 'User successfully verified!');
        } else {
          setVerificationStatus(data.error || 'Verification failed.');
          setResendLink(data.resendLink || null);
        }
      } catch (error) {
        console.error('Error during verification:', error);
        setVerificationStatus('An error occurred during verification.');
      }
    };

    verifyUser();
  }, [token, navigate]);

  return (
    <div className={verifycss.verifybox}>
      {verificationStatus ? (
        <>
          <p className={verifycss.verifymessage}>{verificationStatus}</p>
          {verificationStatus === 'User successfully verified!' && (
            <Link to="/login" className={verifycss.verifybutton}>
              Go to Login
            </Link>
          )}
         {(verificationStatus === 'Verification failed.' || verificationStatus === 'Invalid or already verified token') && (
              <>
                <p>
                  If you haven't received the activation email, you can{' '}
                  {resendLink && (
                    <Link to="/resend" className={verifycss.resendLink}>
                      Resend Activation
                    </Link>
                  )}
                  {!resendLink && <span>contact support for assistance</span>}.
                </p>
              </>
            )}
        </>
      ) : (
        <p>Verifying user...</p>
      )}
    </div>
  );
};

export default Verification;
