const SET_NEW_TRIP = "user/SET_NEW_TRIP";

export const setNewTrip = (tripData) => {
    return {
        type: SET_NEW_TRIP,
        tripData: tripData,
    };
};

export const addTrip = (tripData) => {
    return async (dispatch) => {
        await fetch("****API ROUTE****", {
            method: 'POST',
            body: JSON.stingify(tripData),
        });
        dispatch(setNewTrip(tripData))
    };
};

const initialState = [];

function reducer (state = initialState, action) {
    switch (action.type) {
        case SET_NEW_TRIP:
            return action.tripData;
        default:
            return state;
    };
};

export default reducer 