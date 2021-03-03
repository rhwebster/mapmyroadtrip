import React from "react";
import { NavLink } from 'react-router-dom';
import TripMap from '../CreateTripForm/TripMap';

export default function SingleTrip({...props}) {

  return (
    // <ul className='trips'>
      <ul className="trips__item">
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
            <NavLink exact to={`trip/${props.id}`}>
              <div className='map'>
                <TripMap />
              </div>
              <div className="trips__inform">
                <p className="trips__name">{props.title}</p>
                <time className="date" dateTime="2020-05-05T10:00:00">
                  {props.start_date}
                </time>
              </div>
            </NavLink>
            </a>
          </ul>
        //   </ul>
  );
}