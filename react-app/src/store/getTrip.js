const SET_TRIPS = "trips/setTrips";

export const setTrips = (trips) => {
    return {
        type: SET_TRIPS,
        trips: trips,
    };
};

export const getTrips = () => async (dispatch) => {
    const res = await fetch(`/users/<int:user_id>/trips`);
    dispatch(
        setTrips(res.data.trip)
    );
};

const initialState = [];

const TripsReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case SET_TRIPS:
            newState = action.trips;
            return newState;
        default:
            return state;
    };
};

export default TripsReducer

