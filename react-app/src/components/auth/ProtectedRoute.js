import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session'

const ProtectedRoute = props => {
  const authenticate = useSelector((state) => state.session.authenticate);

  return (
    <Route {...props}>
      {authenticate ? props.children  : <Redirect to="/login" />}
    </Route>
  )
};

export default ProtectedRoute;
