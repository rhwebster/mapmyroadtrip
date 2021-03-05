import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllTrips } from '../../store/trips'
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/index'
import Trips from '../Trips/Trips'
import Entries from '../Trips/Entries'
import Profile from '../Trips/Profile'

const Dash = () => {

  const dispatch = useDispatch();

  const userId = useSelector((state) => {
    if (state.session.user) {
      return state.session.user.id
    }
  })

  const authenticate = useSelector((state) => state.session.authenticate);

  useEffect(() => {
    if (userId) {
      dispatch(getAllTrips((userId)))
    }
  }, [dispatch, userId]);

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
