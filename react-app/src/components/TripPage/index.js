import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllTrips } from '../../store/getTrips';
import { authenticate } from "../../store/session";
import Nav from '../Nav/Nav'
import Profile from '../Trips/Profile'

function Trip() {
    
    const dispatch = useDispatch();
    const { id } = useParams();

    const userId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.id
        }
    })

    const trip = useSelector((state) => state.trip.)

    const authenticate = useSelector((state) => state.session.authenticate);
    const trips = useSelector((state) => state.trips.trips);
    console.log(trips)
    console.log(userId)

    useEffect(() => {
        if (userId) {
            dispatch(getAllTrips((userId)))
        }
    }, [dispatch, userId]);

    if (!authenticate) {
        return null;
    }

    // if (!authenticate) {
    //     return null;
    // }