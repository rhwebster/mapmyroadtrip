const SET_PHOTO_GALLERY ="user/SET_PHOTO_GALLERY";

export const setPhotoGallery = (payload) => {
    return {
        type: SET_PHOTO_GALLERY,
        payload,
    };
};

export const allPhotos = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/trip/photos/${userId}`);
        if (res.ok) {
        const data = await res.json()
        dispatch(setPhotoGallery(data.photos));
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
