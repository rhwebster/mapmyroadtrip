import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getTrip } from "../../store/getTrip";
import SingleEntry from '../SingleEntry/SingleEntry'
import { authenticate } from "../../store/session";
import { setTripEntries } from '../../store/entry';
import Nav from '../Nav/Nav'
import Profile from '../Trips/Profile'

function Trip() {
    
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector(state => state.session.user);

    const userId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.id
        }
    })

    useEffect(async () => {
        dispatch(getTrip(id))
    }, []);

    useEffect(() => {
        dispatch(setTripEntries(id))
    }, []);

    
    const authenticate = useSelector((state) => state.session.authenticate);
    const trip = useSelector((state) => state.trip);
    const tripEntries = useSelector((state) => state.tripEntries.tripEntries);
    

    if (!authenticate) {
        return null;
    }

    return (
        <>
        <div className='wrapper'>
        <Nav />
        <main className="main">
            <>
                <div className="trip-page-header"
                    id="trip-page-header">
                    <h2>{trip.title}</h2>
                    <h3>Started On: {trip.start_date}</h3>
                    <br></br>
                    <br></br>
                    {tripEntries &&
                        tripEntries.map(entry => {
                            return (
                                <>
                                    <SingleEntry title={entry.title} img={entry.image} entry={entry.entry} />
                                </>
                            )
                        })}
                </div>
            </>
        </main>
        <Profile />
    </div>
        </>
    )
};

export default Trip;