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
      <Route path="/login" exact={true}>
          <SplashPage />
      </Route>
      <Route path="/photos" exact={true}>
          <Photos />
        </Route>
        <Route path="/dash" exact={true}>
          <Dash />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm  />
        </Route>
        <Route path="/map">
          <RoadTripMap />
        </Route>
        <Route path="/auto">
          <MapAutoComplete />
        </Route>
        <Route path="/entry">
          <CreateJournalEntry />
        </Route>
        <Route path="/trip">
          <CreateNewTrip />
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
