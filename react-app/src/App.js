import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import * as sessionActions from './store/session'
import RoadTripMap from "./components/Map/RoadTripMap";
import Dash from "./components/Dash/Dash";
import MapAutoComplete from "./components/MapAutoComplete/MapAutoComplete";
import CreateJournalEntry from './components/CreateJournalEntryForm/CreateJournalEntry'
import Photos from "./components/Photos/Photos";
import SplashPage from "./components/SplashPage/SplashPage";
import CreateNewTrip from './components/CreateTripForm/CreateTrip'
import Entries from './components/Entries/Entries'
import Trips from './components/TripsPage/index'
import UserSettings from './components/UserSettings'

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
        <Route path="/login" exact={true}>
            <SplashPage />
        </Route>
      {/* */}
      <Switch>
      <Route path="/photos" exact={true}>
          <NavBar /> 
          <Photos />
        </Route>
        <Route path="/dash" exact={true}>
          <NavBar /> 
          <Dash />
        </Route>
        <Route path="/sign-up" exact={true}>
          <NavBar /> 
          <SignUpForm  />
        </Route>
        <Route path="/map">
          <NavBar /> 
          <RoadTripMap />
        </Route>
        <Route path="/auto">
          <NavBar /> 
          <MapAutoComplete />
        </Route>
        <Route path="/entry">
          <NavBar /> 
          <CreateJournalEntry />
        </Route>
        <Route path="/trip">
          <NavBar /> 
          <CreateNewTrip />
        </Route>
        <Route path="/entries">
          <Entries />
        </Route>
        <Route path="/trips">
          <Trips />
        </Route>
        {/* <Route>
          <Trips />
        </Route> */}
        <Route path="/settings">
          <NavBar /> 
          <UserSettings />
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
