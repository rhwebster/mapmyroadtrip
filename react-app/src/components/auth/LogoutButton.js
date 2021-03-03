import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session'
import { Link } from '../NavBar';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return <Link onClick={() => {dispatch(sessionActions.logout()); history.push('/')}}>Logout</Link>;
};

export default LogoutButton;
