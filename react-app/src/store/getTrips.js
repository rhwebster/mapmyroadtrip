const SET_TRIPS = "trips/Trips";

export const setTrips = (trips) => {
    return {
        type: SET_TRIPS,
        trips: trips,
    };
};

export const getTrips = () => async (dispatch) => {
    const res = await fetch("api/trip/trips");
    console.log('this is the data ======>', res)
    dispatch(
        setTrips(res.data.trips)
    );
};

const initialState = [];

const TripsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_TRIPS:
            newState = action.trips;
            return newState;
        default:
            return state;
    }
}

export default TripsReducer;