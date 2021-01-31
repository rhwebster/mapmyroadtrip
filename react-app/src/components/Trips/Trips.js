import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TripMap from '../CreateTripForm/TripMap';
import './Trips.css';
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
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Trips</h2>
        <NavLink exact to="/trip">
          <button
            className="section__button section__button--painted focus--box-shadow"
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
        <ul className="trips">
          <li className="trips__item">
            <a className="trips__link focus--box-shadow" href="#">
              <div className="trips__header">
                <button
                  className="setting setting--absolute focus--box-shadow"
                  type="button"
                >
                  <svg
                    enableBackground="new 0 0 515.555 515.555"
                    height="512"
                    viewBox="0 0 515.555 515.555"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </button>
              </div>
              <NavLink exact to={`/trip/1`}>
              <div className='map'>
                <TripMap setZoom={1} />
              </div>
                <div className="trips__inform">
                  <div>

                  </div>
                  <p className="trips__name">Vegas</p>
                  <time className="date" dateTime="2020-05-05T10:00:00">
                    05 May, 2020
                  </time>
                </div>
              </NavLink>
            </a>
          </li>
          <li className="trips__item">
            <a className="trips__link focus--box-shadow" href="#">
              <div className="trips__header">
                <button
                  className="setting setting--absolute focus--box-shadow"
                  type="button"
                >
                  <svg
                    enableBackground="new 0 0 515.555 515.555"
                    height="512"
                    viewBox="0 0 515.555 515.555"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </button>
              </div>
            <NavLink exact to={`trip/2`}>
              <div className='map'>
                <TripMap />
              </div>
              <div className="trips__inform">
                <p className="trips__name">Cali</p>
                <time className="date" dateTime="2020-05-05T10:00:00">
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
