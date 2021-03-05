import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TripMap from '../CreateTripForm/TripMap';
import './Trips.css';
import { getAllTrips } from '../../store/trips';


export default function Trips() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => {
    if (state.session.user) {
      return state.session.user.id
    }
  });

  const authenticate = useSelector((state) => state.session.authenticate);
  const trips = useSelector((state) => state.trips.trips);
  const lastTrip = useSelector((state) => {
    if (state.trips.trips) {
      return state.trips.trips[trips.length-1]
    }
  });

  const secondLastTrip = useSelector((state) => {
    if (state.trips.trips) {
      return state.trips.trips[trips.length - 2]
    }
  });


  // console.log('lastTrip ====>', trips[0])

  // if (!authenticate) {
    //   return null;
  // }

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

            {lastTrip && (
              <>
              <NavLink exact to={`trip/${lastTrip.id}`}>
              <div className='map'>
                <img style={{height:"412px", width:"412px"}} src={`https://maps.googleapis.com/maps/api/staticmap?center=${lastTrip.start_lat,lastTrip.start_lon}&size=600x600&maptype=roadmap
              &markers=color:green%7Clabel:A%7C${lastTrip.start_lat},${lastTrip.start_lon}&markers=color:red%7Clabel:B%7C${lastTrip.end_lat},${lastTrip.end_lon}
              &key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}></img>
                {/* <TripMap /> */}
              </div>
              <div className="trips__inform">
                <p className="trips__name">{lastTrip && lastTrip.title}</p>
                <time className="date" dateTime="2020-05-05T10:00:00">
                  {lastTrip && lastTrip.start_date}
                </time>
              </div>
            </NavLink>
            </>
            )}
            </a>
          </li>
          <li className="trips__item">
            <a className="trips__link focus--box-shadow" href="#">
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
            {secondLastTrip && (
              <NavLink exact to={`trip/${secondLastTrip.id}`}>
              <div className='map'>
              <img style={{height:"412px", width:"412px"}} src={`https://maps.googleapis.com/maps/api/staticmap?center=${secondLastTrip.start_lat,lastTrip.start_lon}&size=600x600&maptype=roadmap
              &markers=color:green%7Clabel:A%7C${secondLastTrip.start_lat},${secondLastTrip.start_lon}&markers=color:red%7Clabel:B%7C${secondLastTrip.end_lat},${secondLastTrip.end_lon}
              &key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}></img>
                {/* <TripMap /> */}
              </div>
              <div className="trips__inform">
                <p className="trips__name">{secondLastTrip && secondLastTrip.title}</p>
                <time className="date" dateTime="2020-05-05T10:00:00">
                  {secondLastTrip && secondLastTrip.start_date}
                </time>
              </div>
            </NavLink>
            )}
            </a>
          </li>
        </ul>
      </section>
  );
}
