const SET_TRIPS = "trips/Trips";
const GET_TRIPS = "journalEntry/GET_TRIPS";
const SET_TRIP = 'trip/setTrip';
const SET_NEW_TRIP = "user/SET_NEW_TRIP";

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

export const setNewTrip = (tripData) => {
    return {
        type: SET_NEW_TRIP,
        tripData: tripData,
    };
};

export const getAllTrips = (userId) => async (dispatch) => {
    console.log('hello....')
    const res = await fetch(`/api/users/${userId}/trips`);
    console.log(`it's me....`, res)
    let data = await res.json();
    console.log(`hello from the other side`, data)
    dispatch(getTrips(data.trips));
};

export const getTrip = (tripId) => async (dispatch) => {

    const res = await fetch(`/api/trips/${tripId}`);
    let data = await res.json();
    dispatch(setTrip(data.payload));
};

export const addTrip = (formObj) => async (dispatch) => {

    const { title, startDate, endDate, startLat, startLon, endLat, endLon, route, shared, userId } = formObj;
    const formData = { title, startDate, endDate, startLat, startLon, endLat, endLon, route, shared, userId };

    const res = await fetch(`/api/trips/`, {
        method: "POST",
        body: JSON.stringify(formData),
    });

    dispatch(setNewTrip(res));
    return res
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
        case SET_NEW_TRIP:
            return { ...state, [action.tripData]: action.tripData };
        default:
            return state;
    }
}

export default TripsReducer;