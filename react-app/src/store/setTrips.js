const SET_TRIPS = "user/SET_TRIPS";

export const setTrips = (tripsData) => {
    return {
        type: SET_TRIPS,
        tripsData: tripsData,
    };
};

export const getTrips = (userId) => async (dispatch) => {
    const res = await fetch(`/api/user/${userId}/trips`);
    dispatch(
        setTrips(res.data.trips)
    );
};

const initialState = {};

const TripsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_TRIPS:
            newState = { ...state, [action.tripsData]: action.tripsData };
            return newState;
        default:
            return state;
    }
}

export default TripsReducer;