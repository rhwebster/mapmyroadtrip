
const SET_DATA = 'session/setData';

const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};

export const getUserPhotos = (userId) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/photos`);
    if (response.ok) {
      let data = await response.json()
      dispatch(setData(data.photos));
    }
};

const initialState = { photos: [] };

const photoReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_DATA:
      newState = Object.assign({}, state);
      newState.photos = action.payload;
      return newState;
    default:
      return state;
  }
};

export default photoReducer;
