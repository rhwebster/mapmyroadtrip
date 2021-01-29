const SET_NEW_TRIP = "user/SET_NEW_TRIP";

export const setNewTrip = (tripData) => {
    return {
        type: SET_NEW_TRIP,
        tripData: tripData,
    };
};

export const addTrip = (formObj) => async (dispatch) => {

    const { title, startDate, endDate, startLat, startLon, endLat, endLon, route } = formObj;
    const formData = { title, startDate, endDate, startLat, startLon, endLat, endLon, route };

    const res = await fetch(`/api/trips/`, {
        method: "POST",
        body: JSON.stringify(formData),
    });

    dispatch(setNewTrip(res));
    return res
};

const initialState = {};

function newTripReducer (state = initialState, action) {
    switch (action.type) {
        case SET_NEW_TRIP:
            return { ...state, [action.tripData]: action.tripData };
        default:
            return state;
    };
};

export default newTripReducer