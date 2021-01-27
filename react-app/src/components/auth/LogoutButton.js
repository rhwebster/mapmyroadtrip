import React from "react";
import { logout } from "../../services/auth";
import { useSelector } from "react-redux";

const LogoutButton = ({setAuthenticated}) => {
  const authenticate = useSelector((state) => state.session.authenticate);

  const onLogout = async (e) => {
    await logout();
    
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
