
const SET_DATA = 'session/setData';
const ADD_DATA = 'session/addData';
const REMOVE_POINT = 'session/removePoint';

const setData = (journal_entry) => {
  return {
    type: SET_DATA,
    payload: journal_entry,
  };
};

const addData = (journal_entry_lat, journal_entry_lon) => {
  return {
    type: ADD_DATA,
    journal_entry_lat,
    journal_entry_lon,
  };
};

const removePoint = () => ({
  type: REMOVE_POINT
});

export const getAllJournalEntryPoints = (userId) => async dispatch => {
    const response = await fetch(`/api/map/${userId}`);
    if (response.ok) {
      let data = await response.json()
      dispatch(setData(data.coordinates));
    }
};

export const addJournalEntryPoints= (lat, lon) => async dispatch => {
      dispatch(addData(lat, lon));
};

const initialState = { coordinates: null, addedLat: null, addedLon: null };

const mapReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_DATA:
      newState = Object.assign({}, state);
      newState.coordinates = action.payload;
      return newState;
    case ADD_DATA:
      newState = Object.assign({}, state);
      newState.addedLat = action.journal_entry_lat;
      newState.addedLon = action.journal_entry_lon;
      return newState;
    // case REMOVE_USER:
    //   newState = Object.assign({}, state, { user: null, authenticate: false });
    //   return newState;
    default:
      return state;
  }
};

export default mapReducer;
