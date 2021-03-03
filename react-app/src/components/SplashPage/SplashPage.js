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
                <div className="links">
                  <FontAwesomeIcon icon={faSignInAlt} color="white" size="2x"/>
                    <span className="link-text">
                    {!authenticate && (
                    <LoginFormModal />
                    )}
                    </span>
                </div>
                <div className="links">
                  <FontAwesomeIcon style={{textShadow: '0 3px 0 rgb(14, 35, 63, .30)'
                    }} color="white" icon={faCarAlt} size="2x"/>
                    <span className="link-text">
                    {!authenticate && (
                    <SignUpFormModal />
                  )}
                  </span>
                </div>
                  <div className="links">
                  <FontAwesomeIcon style={{textShadow: '0 3px 0 rgb(14, 35, 63, .30)'
                    }} color="white" icon={faStreetView} size="2x"/>
                    <a className="sc-gKsewC iRjELH" id="demo-text" href="">Demo User</a>
                  </div>
                </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default SplashPage;
