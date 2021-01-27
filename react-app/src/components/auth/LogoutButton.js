import React from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session'

const LogoutButton = () => {
  const dispatch = useDispatch();

  return <button onClick={() => {dispatch(sessionActions.logout())}}>Logout</button>;
};

export default LogoutButton;
