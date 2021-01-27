
const SET_DATA = 'session/setData';
const REMOVE_POINT = 'session/removePoint';

const setData = (journal_entry) => {
  return {
    type: SET_DATA,
    payload: journal_entry,
  };
};

const removePoint = () => ({
  type: REMOVE_POINT
});

export const getJournalEntryPoints = (userId) => async dispatch => {
    const response = await fetch(`/api/map/${userId}`);
    if (response.ok) {
      let data = await response.json()
      dispatch(setData(data));
    }
};

export const getTripStartEndPoints= (userId) => async dispatch => {
    const res = await fetch('/api/auth');
    if (res.ok) {
      let data = await res.json()
      dispatch(setData(data));
    }
};

const initialState = { journalEntry: null };

const mapReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_DATA:
      newState = Object.assign({}, state);
      newState.journalEntry = action.payload;
      return newState;
    // case REMOVE_USER:
    //   newState = Object.assign({}, state, { user: null, authenticate: false });
    //   return newState;
    default:
      return state;
  }
};

export default mapReducer;
