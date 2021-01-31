const SET_NEW_TRIPS = "user/SET_NEW_TRIPS";
const GET_TRIPS = "trip/GET_TRIPS";

export const setNewTrip = (tripData) => {
    return {
        type: SET_NEW_TRIPS,
        tripData: tripData,
    };
};

export const getTrips = (trips) => {
    return {
        type: GET_TRIPS,
        trips
    };
};

export const getAllTrips = (userId) => async (dispatch) => {

    const res = await fetch(`api/user/${userId}/trips`);
    let data = await res.json();
    dispatch(getTrips(data.trips));
};

export const addTrip = (formObj) => async (dispatch) => {
    const { userId, title, startDate, endDate, startLat, startLon, endLat, endLon, route, shared } = formObj;
    const formData = { userId, title, startDate, endDate, startLat, startLon, endLat, endLon, route, shared };

    const res = await fetch(`api/trip/`, {
        method: "POST",
        body: JSON.stringify(formData),
    });

    console.log('this is the data ======>', res)
    dispatch(setNewTrip(res.data.trips));
};

const initialState = {trips: []};

const TripsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_NEW_TRIPS:
            return {...state, [action.tripData]: action.tripData};
        case GET_TRIPS:
            newState = Object.assign({}, state);
            newState.trips = action.trips;
        default:
            return state;
    }
}

export default TripsReducer;