import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session'
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/index'
import Trips from '../Trips/Trips'
import Entries from '../Trips/Entries'
import Profile from '../Trips/Profile'

const Dash = () => {
    const authenticate = useSelector((state) => state.session.authenticate);

  if (!authenticate) {
    return null;
  }

  return (
    <div className='wrapper'>
        <Nav  />
        <main className="main">
            <SearchBar  />
            <Trips  />
            <Entries  />
        </main>
        <Profile  />
    </div>
  );
}

export default Dash;