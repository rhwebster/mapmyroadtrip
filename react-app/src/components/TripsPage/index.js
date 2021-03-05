
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllTrips } from '../../store/trips';
import Nav from '../Nav/Nav'
import Profile from '../Trips/Profile'
import SingleTrip from '../TripList'


function Trips() {
    const dispatch = useDispatch();

    const userId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.id
       }
    })

    const authenticate = useSelector((state) => state.session.authenticate);
    const trips = useSelector((state) => state.trips.trips);

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
        <div className='trip-div'>
            {trips &&
            trips.map(trip => {
                return (
                    <SingleTrip title={trip.title} id={trip.id} />
                )
            })}
        </div>
        </main>
        <Profile  />
    </div>
    )
}

export default Trips;
