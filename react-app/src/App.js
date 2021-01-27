import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import * as sessionActions from './store/session'
import RoadTripMap from "./components/Map/RoadTripMap";
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/index'
import Trips from './components/Trips/Trips'
import Entries from './components/Trips/Entries'
import Profile from './components/Trips/Profile'
import Header from './components/Trips/Header'

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      dispatch(sessionActions.authenticatee())
      setLoaded(true);
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className='wrapper'>
      <Switch>
           <Route path="/dash" exact={true}>
          <Nav  />
          <main className="main">
          <SearchBar  />
          <Trips  />
          <Entries  />
          </main>
          <Profile  />
          
        </Route>
        {/* <Route path="/login" exact={true}>
          <LoginForm
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm  />
        </Route> */}
        {/* <Route path="/map">
          <RoadTripMap />
        </Route> */}
        {/* <ProtectedRoute path="/users" exact={true}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute> */}
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
