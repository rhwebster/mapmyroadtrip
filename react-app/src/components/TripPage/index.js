import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTrip } from "../../store/trips";
import SingleEntry from '../SingleEntry/SingleEntry'
import { setTripEntries } from '../../store/entry';
import Nav from '../Nav/Nav'
import Profile from '../Trips/Profile'
import { nanoid } from 'nanoid'

function Trip() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const [key] = React.useState(nanoid)

    useEffect(() => {
        dispatch(getTrip(id))
        dispatch(setTripEntries(id))
    }, [dispatch, id]);


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
                                    <SingleEntry key={entry ? entry.title:key} title={entry.title} img={entry.image} entry={entry.entry} />
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
