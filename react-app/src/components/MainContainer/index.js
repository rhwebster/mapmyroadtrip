import React from 'react';
import { useSelector } from "react-redux";
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/index'
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
            <Photos />
        </main>
        <Profile  />
    </div>
  );
}

export default Dash;
