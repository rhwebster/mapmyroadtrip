import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from "react-redux";
import LoginFormModal from './LoginFormModal/LoginFormModal';
import { Modal } from '../context/Modal'
import SignUpForm from './auth/SignUpForm';

const NavBar = () => {
  const authenticate = useSelector((state) => state.session.authenticate);
  const [showModal, setShowModal] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
      <>
      {!authenticate && (
            <>
              <LoginFormModal />
              <button id="loginButton" onClick={() => {
                setShowModal(true)
                }}>SignUp
              </button>
              {showModal && (
                <Modal onClose={() => setShowModal(false)} name="signUp">
                    <SignUpForm />
                </Modal>
            )}
              {/* <NavLink to="/signup">Sign Up</NavLink> */}
            </>
          )}
      </>
    </nav>
  );
}

export default NavBar;
