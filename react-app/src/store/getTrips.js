const SET_TRIPS = "trips/Trips";
const GET_TRIPS = "journalEntry/GET_TRIPS";
const GET_TRIP = "trip/GET_TRIP";

export const setTrips = (trips) => {
    return {
        type: SET_TRIPS,
        trips: trips,
    };
};

// export const setTrip = (trip) => {
//     return {
//         type: GET_TRIP,
//         trip: trip,
//     };
// }

export const getTrips = (trips) => {
    return {
        type: GET_TRIPS,
        trips
    };
};

// export const getTrip = (id) => async (dispatch) => {
//     const res = await fetch(``);
//     let data = await res.json();
//     dispatch(setTrip(data.trip));
// };

export const getAllTrips = (userId) => async (dispatch) => {

    const res = await fetch(`/api/trips/${userId}/trips`);
    console.log('this is the data ======>', res)
    let data = await res.json();
    dispatch(getTrips(data.trips));
};

const initialState = [];

const TripsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
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