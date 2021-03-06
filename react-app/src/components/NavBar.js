import React from 'react';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from "react-redux";
import LoginFormModal from './LoginFormModal/LoginFormModal';
import SignUpFormModal from './SignUpFormModal/SignUpFormModal'
import styled from "styled-components";
import ProtectedRoute from './auth/ProtectedRoute';

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-family: 'Reem Kufi', sans-serif;
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

export const Link = styled.a`
  color: white;
  text-decoration: none;
  padding: 0px 15px 0px 0px;
  :hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

const NavBar = () => {
  const authenticate = useSelector((state) => state.session.authenticate);

  return (
    <>
    <Nav>
      <Logo>
        <Link href="/dash" exact={true}>
          TripKeeper
        </Link>
      </Logo>
      <Menu >
        <>
        {!authenticate && (
          <LoginFormModal />
        )}
        {!authenticate && (
          <SignUpFormModal />
        )}
        {authenticate && (
          <ProtectedRoute>
            <LogoutButton />
          </ProtectedRoute>
        )}
        </>
      </Menu>
    </Nav>
    </>

  );
}

export default NavBar;
