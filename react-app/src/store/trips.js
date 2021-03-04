const SET_TRIPS = "trips/Trips";
const GET_TRIPS = "journalEntry/GET_TRIPS";
const SET_TRIP = 'trip/setTrip';
const GET_TRIP = "trip/GET_TRIP";

const setTrip = ({ trip }) => {
    return {
        type: SET_TRIP,
        trip,
    };
};

export const setTrips = (trips) => {
    return {
        type: SET_TRIPS,
        trips: trips,
    };
};

export const getTrips = (trips) => {
    return {
        type: GET_TRIPS,
        trips
    };
};

export const getAllTrips = (userId) => async (dispatch) => {

    const res = await fetch(`/api/trips/${userId}/trips`);
    console.log('this is the data ======>', res)
    let data = await res.json();
    dispatch(getTrips(data.trips));
};

export const getTrip = (tripId) => async (dispatch) => {

    const res = await fetch(`/api/trips/${tripId}`);
    console.log('this is the data ======>', res)
    let data = await res.json();
    dispatch(setTrip(data.payload));
};

const initialState = [];

const TripsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_TRIP:
            newState = action.trip;
            return newState;
        case SET_TRIPS:
            newState = action.trips;
            return newState;
        case GET_TRIPS:
            newState = Object.assign({}, state);
            newState.trips = action.trips;
            return newState;
        default:
            return state;
    }
}

export default TripsReducer;