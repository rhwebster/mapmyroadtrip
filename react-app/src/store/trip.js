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

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_TRIP:
      return action.tripData;
    default:
      return state;
  };
};

export default reducer

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_TRIP,
    payload: user,
  };
};

const removeUser = () => ({
  type: REMOVE_USER
});

export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    if (response.ok) {
      let data = await response.json()
      dispatch(setUser(data));
    }
};

export const authenticate = () => async dispatch => {
    const res = await fetch('/api/auth');
    if (res.ok) {
      let data = await res.json()
      dispatch(setUser(data));
    }
};

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    method: 'DELETE'
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null, authenticate: false };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_TRIP:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      newState.authenticate = true;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null, authenticate: false });
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;