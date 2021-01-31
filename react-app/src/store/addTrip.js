const SET_NEW_TRIP = "user/SET_NEW_TRIP";

export const setNewTrip = (tripData) => {
    return {
        type: SET_NEW_TRIP,
        tripData: tripData,
    };
};

export const addTrip = (formObj) => async (dispatch) => {

    const { userId, title, startDate, endDate, startLat, startLon, endLat, endLon, route, shared } = formObj;
    const formData = { userId, title, startDate, endDate, startLat, startLon, endLat, endLon, route, shared };

    const res = await fetch(`/api/trip/`, {
        method: "POST",
        body: JSON.stringify(formData),
    });

    dispatch(setNewTrip(res));
    return res
};

const initialState = {};

function TripReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NEW_TRIP:
            return { ...state, [action.tripData]: action.tripData };
        default:
            return state;
    };
};

export default TripReducer