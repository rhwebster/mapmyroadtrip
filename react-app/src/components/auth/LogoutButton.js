import React from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session'
import { Link } from '../NavBar';

const LogoutButton = () => {
  const dispatch = useDispatch();

  return <Link onClick={() => {dispatch(sessionActions.logout())}}>Logout</Link>;
};

export default LogoutButton;
