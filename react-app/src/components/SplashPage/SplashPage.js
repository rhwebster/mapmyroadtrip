import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import './SplashPage.css';
import Background from './Splash.png'
import Logo from './TKlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faCarAlt, faStreetView } from '@fortawesome/free-solid-svg-icons'
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignUpFormModal from '../SignUpFormModal/SignUpFormModal'

const SplashPage = () => {
  const authenticate = useSelector((state) => state.session.authenticate);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div id="background-image" style={{
        background:`url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
          <div id="container">
            <div id="center-content">
            <img id="logo" src={Logo}></img>
            <span id="tagline">It's the journal, not the destination</span>
              <div className="options">
                <div>  
                  <Link to="/">
                  <FontAwesomeIcon icon={faSignInAlt} size="2x"/>
                  </Link><br/>
                  {!authenticate && (
                  <LoginFormModal />
                  )}
                </div>
                <div>
                  <FontAwesomeIcon icon={faCarAlt} size="2x"/><br/> 
                  {!authenticate && (
                  <SignUpFormModal />
                )}
                </div>
                <div>
                <FontAwesomeIcon icon={faStreetView} size="2x"/><br/>
                <a href="">Demo User</a>  
                </div>
                </div>
          </div>  
      </div>
    </div>
    </div>
  );
}

export default SplashPage;
