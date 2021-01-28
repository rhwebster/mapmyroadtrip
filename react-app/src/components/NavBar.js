import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from "react-redux";
import LoginFormModal from './LoginFormModal/LoginFormModal';
import { Modal } from '../context/Modal';
import SignUpForm from './auth/SignUpForm';
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;



const NavBar = ({isLoaded}) => {
  const authenticate = useSelector((state) => state.session.authenticate);
  const [showModal, setShowModal] = useState(false);

  if (authenticate) {
    sessionLinks = (
      <>
        <Item>
          <LogoutButton />
        </Item>
      </>
    );
  } else {
    sessionLinks = (
      <>
      <Item>
        <Link href="/login" exact={true}>
          Login
        </Link>
      </Item>
      <Item>
        <Link href="/sign-up" exact={true}>
          Sign Up
        </Link>
      </Item>
      </>
    );
  }

  return (
    <>
    <Nav {...NavBar}>
      <Logo>TripKeeper</Logo>
      <Menu > 
        <Item>
          <Link href="/" exact={true}>
            Home
          </Link>  
        </Item>
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
            </>
          )}
      </>
      </Menu>      
    </Nav>
      {/* <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
        <Item>
          <Link href="/" exact={true}>
            Home
          </Link>
        </Item>
        <Item>
          <Link href="/login" exact={true}>
            Login
          </Link>
        </Item>
        <Item>
          <Link href="/sign-up" exact={true}>
            Sign Up
          </Link>
        </Item>
          <LogoutButton />
        
        </OverlayMenu>
      </Overlay> */}
     
    </>
      
  );
}

export default NavBar;
