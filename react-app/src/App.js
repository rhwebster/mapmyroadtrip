import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import * as sessionActions from './store/session'
import RoadTripMap from "./components/Map/RoadTripMap";
import Test from './components/Test'
import Dash from "./components/Dash/Dash";
import MapAutoComplete from "./components/MapAutoComplete/MapAutoComplete";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      dispatch(sessionActions.authenticate())
      setLoaded(true);
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/dash" exact={true}>
          <Dash />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm  />
        </Route>
        <Route path="/test" exact={true}>
          <Test  />
        </Route>
        <Route path="/map">
          <RoadTripMap />
        </Route>
        <Route path="/auto">
          <MapAutoComplete />
        </Route>
        {/* <ProtectedRoute path="/users" exact={true}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute> */}
        <ProtectedRoute path="/" exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
