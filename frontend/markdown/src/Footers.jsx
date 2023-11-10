import React from 'react';
import footercss from './footer.module.css';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faLinkedin,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import the Apple icon

function Footers() {
  return (
    
    <div className={footercss.body}>
       <div id='contact'></div>
      <footer className={footercss.footer}>
        <div className={footercss.footcontainer}>
          <div className={footercss.footrow}>

            <div className={footercss.footcol}>
              <h4>company</h4>
              <ul>
                <li><a href='#'>about us</a></li>
                <li><a href='#'>our services</a></li>
                <li><a href='#'>privacy policy</a></li>
                <li><a href='#'>affilate program</a></li>
              </ul>
            </div>

            <div className={footercss.footcol}>
              <h4>get help</h4>
              <ul>
                <li><a href='#'>FAQ</a></li>
                <li><a href='#'>shipping</a></li>
                <li><a href='#'>returns</a></li>
                <li><a href='#'>order status</a></li>
              </ul>
            </div>

            <div className={footercss.footcol}>
  <h4>Subscribe to our Newsletter</h4>
  <p>Stay updated with our latest offers and products by subscribing to our newsletter.</p>
  <input type="email" placeholder="Your Email Address" />
  <button>Subscribe</button>
</div>


            <div className={footercss.footcol}>
              <h4>follow us</h4>
              <div className={footercss.footicons}>
              <FontAwesomeIcon icon={faFacebook} className={footercss.footsocialicons} />
              <FontAwesomeIcon icon={faLinkedin} className={footercss.footsocialicons}/>
              <FontAwesomeIcon icon={faTwitter}  className={footercss.footsocialicons}/>
              <FontAwesomeIcon icon={faInstagram} className={footercss.footsocialicons}/>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footers;
