const SET_TRIP = 'trip/setTrip';

const setTrip = ({ trip }) => {
    return {
        type: SET_TRIP,
        trip,
    };
};

export const getTrip = (tripId) => async (dispatch) => {

    const res = await fetch(`/api/trips/${tripId}`);
    console.log('this is the data ======>', res)
    let data = await res.json();
    dispatch(setTrip(data.payload));
};

const initialState = [];

const TripReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_TRIP:
            newState = action.trip;
            return newState;
        default:
            return state;
    }
}

export default TripReducer;