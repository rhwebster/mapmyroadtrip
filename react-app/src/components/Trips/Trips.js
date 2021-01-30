import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import JournalEntryMap from '../JournalEntryMap/JournalEntryMap';
// import './Trips.css';
import { getTrips } from '../../store/getTrips';

export default function Trips() {

  // const dispatch = useDispatch();

  // const allTrips = useSelector(fullReduxState => {
  //   return fullReduxState.trips;
  // })

  // const lastTrip = allTrips[allTrips.length-1];
  // const secondLastTrip = allTrips[allTrips.length-2];

  // console.log('here are the trips ====>', allTrips);

  // const [trips, setTrips] = useState([]);

  // useEffect(async () => {
  //   dispatch(
  //     getTrips()
  //   );
  // }, []);

  return (


      <section class="section">
        <header class="section__header">
          <h2 class="section__title">Trips</h2>
        <NavLink exact to="/trip">
          <button
            class="section__button section__button--painted focus--box-shadow"
            type="button"
            aria-label="Add New project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="presentation"
            >
              <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
            </svg>
          </button>
        </NavLink>
        </header>
        <ul class="trips">
          <li class="trips__item">
            <a class="trips__link focus--box-shadow" href="#">
              <div class="trips__header">
                <button
                  class="setting setting--absolute focus--box-shadow"
                  type="button"
                >
                  <svg
                    enable-background="new 0 0 515.555 515.555"
                    height="512"
                    viewBox="0 0 515.555 515.555"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </button>
              </div>
              <NavLink exact to={`/trip/1`}>
              {/* <div className='map'>
                <TripMap setLat={setStartLat} setLon={setStartLon} />
              </div> */}
                <div class="trips__inform">
                  <div>

                  </div>
                  <p class="trips__name">Vegas</p>
                  <time class="date" datetime="2020-05-05T10:00:00">
                    05 May, 2020
                  </time>
                </div>
              </NavLink>
            </a>
          </li>
          <li class="trips__item">
            <a class="trips__link focus--box-shadow" href="#">
              <div class="trips__header">
                <button
                  class="setting setting--absolute focus--box-shadow"
                  type="button"
                >
                  <svg
                    enable-background="new 0 0 515.555 515.555"
                    height="512"
                    viewBox="0 0 515.555 515.555"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </button>
              </div>
            <NavLink exact to={`trip/2`}>
              {/* <div className='map'>
                <TripMap setLat={setStartLat} setLon={setStartLon} />
              </div> */}
              <div class="trips__inform">
                <p class="trips__name">Cali</p>
                <time class="date" datetime="2020-05-05T10:00:00">
                  05 May, 2020
                </time>
              </div>
            </NavLink>
            </a>
          </li>
        </ul>
      </section>


  );
}
