const SET_PHOTO_GALLERY ="SET_PHOTO_GALLERY";

export const setPhotoGallery = (payload) => {
    return {
        type: SET_PHOTO_GALLERY,
        payload,
    };
};

export const allPhotos = () => {
    return async (dispatch) => {
        const res = await fetch(`/api/photos/all`);
        if (res.ok) {
        const data = await res.json()
        dispatch(setPhotoGallery(data.trips));
        console.log(data)
        }
    };

};

const initialState = [];

function photoReducer(state = initialState, action) {
    switch(action.type) {
        case SET_PHOTO_GALLERY:
            return action.payload;
        default:
            return state;
    };
};

export default photoReducer 
