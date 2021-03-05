import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import './SplashPage.css';
import Background from './Splash.png'
import Logo from './TKlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faCarAlt, faStreetView } from '@fortawesome/free-solid-svg-icons'
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignUpFormModal from '../SignUpFormModal/SignUpFormModal'
import * as sessionActions from '../../store/session';

const SplashPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authenticate = useSelector((state) => state.session.authenticate);

  useEffect(() => {
    dispatch(sessionActions.logout());
  }, [dispatch])

  const demoUser = () => {
    dispatch(
      sessionActions.login({ email: "theduke@gmail.com", password: "password" })
    );
    history.push('/dash');
  }

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
            <img id="logo" src={Logo} alt=""></img>
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
                    <button id="demo-text" href="" onClick={() => demoUser()}>Demo User</button>
                  </div>
                </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default SplashPage;
